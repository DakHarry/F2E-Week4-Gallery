'use strict';
var gulp = require('gulp')
var sass = require('gulp-sass')
var livereload = require('gulp-livereload')
var watch = require('gulp-watch')
var pug = require('gulp-pug')

gulp.task('default', ['sass:watch','pug:watch'])

gulp.task('sass', () => {
    gulp.src('./sass/**.sass')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('dist/css'))
        .pipe(livereload())
})

gulp.task('pug', () => {
    gulp.src('views/*.pug')
    .pipe(pug())
    .pipe(gulp.dest('dist/'))
})
gulp.task('pug:watch', () => {
    gulp.watch('views/*.pug',['pug'])
})

gulp.task('sass:watch', () => {
    gulp.watch('./sass/**.sass',['sass'])
})