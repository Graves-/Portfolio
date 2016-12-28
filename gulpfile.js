var gulp = require('gulp');
var less = require('gulp-less');
var path = require('path');
var cssnano = require('gulp-cssnano');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var htmlmin = require('gulp-htmlmin');
var ghPages = require('gulp-gh-pages');
var wiredep = require('wiredep').stream;
var browserSync = require('browser-sync').create();

gulp.task('bower', function () {
  gulp.src('./src/index.html')
    .pipe(wiredep())
    .pipe(gulp.dest('./dist'));
});

/*
gulp.task('html-minify',['bower'], function() {
  return gulp.src('./dist/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('dist'));
});
*/

gulp.task('browser-sync',['bower'], function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('deploy', function() {
  return gulp.src('./**.*')
    .pipe(ghPages());
});

gulp.task('default', ['bower','browser-sync']);