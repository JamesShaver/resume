const gulp = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const cleanCSS = require('gulp-clean-css');

const jsFiles = [
    'node_modules/bootstrap/dist/js/bootstrap.bundle.js'
];

const cssFiles = [
    'node_modules/bootswatch/dist/flatly/bootstrap.css',
    'node_modules/bootstrap-icons/font/bootstrap-icons.css',
    'assets/css/custom.css'
];

const fontFiles = [
    'node_modules/bootstrap-icons/font/fonts/*'
];


function js() {
    return gulp.src(jsFiles)
        .pipe(concat('bundle.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('assets/compiled/js'));
}

function css() {
    return gulp.src(cssFiles)
        .pipe(concat('styles.min.css'))
        .pipe(cleanCSS())
        .pipe(gulp.dest('assets/compiled/css'));
}

function fonts() {
    return gulp.src(fontFiles)
        .pipe(gulp.dest('assets/compiled/css/fonts')); // Update the output directory
}



exports.js = js;
exports.css = css;
exports.fonts = fonts;

exports.default = gulp.parallel(js, css, fonts);