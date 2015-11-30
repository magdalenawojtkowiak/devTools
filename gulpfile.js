var gulp = require('gulp'),
    concat = require('gulp-concat'),
    jshint = require('gulp-jshint'),
    stylish = require('jshint-stylish');

gulp.task('concat', function () {
    gulp.src('*.txt')
        .pipe(concat('result.txt'))
        .pipe(gulp.dest('build'));
});

gulp.task('lint', function () {
    return gulp.src('*')
        .pipe(jshint())
        .pipe(jshint.reporter(stylish));
});