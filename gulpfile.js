var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
//var autoprefixer = require('gulp-autoprefixer');

// Compile sass into CSS & auto-inject into browsers

exports.sass = function() {
  return gulp.src(['sass/main.scss'])
  .pipe(sourcemaps.init())
  //.pipe(autoprefixer())
  .pipe(sass().on('error', sass.logError))
  .pipe(sourcemaps.write())
  .pipe(gulp.dest("css"))
  .pipe(sass({outputStyle: 'compressed'}));
};

exports.prod = function() {
  return gulp.src(['sass/main.scss'])
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest("css"))
  .pipe(sass({outputStyle: 'compressed'}));
};


exports.watch = function() {
  gulp.watch('sass/**/*.scss', exports.sass);
};
