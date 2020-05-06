const {src, dest, watch} = require('gulp');
const browserSync = require('browser-sync').create();
const cleanCSS = require('gulp-clean-css');
const rename = require("gulp-rename");
const sass = require("gulp-sass");

function minify() {
  return src('src/css/*.css')
      .pipe(cleanCSS({compatibility: 'ie8'}))
      .pipe(rename({suffix: '.min'}))
      .pipe(gulp.dest('dist/css'));
}

function style() {
  return src('./src/sass/**/*.sass')
      .pipe(sass())
      .pipe(dest('./src/css'))
      .pipe(browserSync.stream())
}

function server() {
  browserSync.init({
    server: {
      baseDir: "./src/"
    }
  })
  watch("./src/sass/**/*.sass", style);
  watch("./src/js/**/*.js", style);
  watch("./src/*.html").on('change', browserSync.reload);
}

exports.style = style;
exports.server = server;
exports.minify = minify;