'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

var AUTOPREFIXER_BROWSERS = [
  'ie >= 8',
  'ie_mob >= 10',
  'ff >= 30',
  'chrome >= 34',
  'safari >= 7',
  'opera >= 23',
  'ios >= 7',
  'android >= 4.4',
  'bb >= 10'
];

gulp.task('styles', function() {

  return $.rubySass('src/sass', {style : 'expanded'})
      .pipe($.plumber())
      .pipe($.autoprefixer({browsers : AUTOPREFIXER_BROWSERS}))
      .pipe(gulp.dest('src/css'));

});

gulp.task('scripts', function() {

  return gulp.src('src/app/**/*.js')
     .pipe($.jshint()) 
     .pipe($.jshint.reporter(require('jshint-stylish'))) 
     .pipe(gulp.dest('src/app'));

});

gulp.task('watch', function() {

  // watch all sass files
  gulp.watch([
    'src/sass/*.scss',
    'src/sass/**/*.scss'
  ], ['styles']);

  // watch all js files
  gulp.watch([
    'src/app/*.js',
    'src/app/**/*.js'
  ], ['scripts']);

});

gulp.task('default', ['styles', 'scripts'], function() {});
