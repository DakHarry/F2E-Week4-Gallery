'use strict';
var gulp = require('gulp')
var sass = require('gulp-sass')
var livereload = require('gulp-livereload')


gulp.task('compressSass', () => {
    gulp.src('./**/**.scss')
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(gulp.dest('dist/css'))
        .pipe(livereload())
})