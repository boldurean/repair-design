const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const cleanCSS = require('gulp-clean-css');
const rename = require("gulp-rename");
const sass = require("gulp-sass");

function minify() {
  return gulp.src('src/css/*.css')
      .pipe(cleanCSS({compatibility: 'ie8'}))
      .pipe(rename({suffix: '.min'}))
      .pipe(gulp.dest('dist/css'));
}

function style() {
  return gulp.src('./src/sass/**/*.sass')
      .pipe(sass())
      .pipe(gulp.dest('./src/css'))
      .pipe(browserSync.stream())
}

function watch() {
  browserSync.init({
    server: {
      baseDir: "./src/"
    }
  })
  gulp.watch('./src/sass/**/*.sass', style);
  gulp.watch("./src/*.html").on('change', browserSync.reload);
}

exports.style = style;
exports.watch = watch;
exports.minify = minify;