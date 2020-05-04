const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const cleanCSS = require('gulp-clean-css');
const rename = require("gulp-rename");
const sass = require("gulp-sass");

function minify() {
  return gulp.src('css/*.css')
      .pipe(cleanCSS({compatibility: 'ie8'}))
      .pipe(rename({suffix: '.min'}))
      .pipe(gulp.dest('css'));
}

function style() {
  return gulp.src('./sass/**/*.sass')
      .pipe(sass())
      .pipe(gulp.dest('./css'))
      .pipe(browserSync.stream())
}

function watch() {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  })
  gulp.watch('./sass/**/*.sass', style);
  gulp.watch("./*.html").on('change', browserSync.reload);
}

exports.style = style;
exports.watch = watch;
exports.minify = minify;