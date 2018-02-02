var gulp = require('gulp'),
	htmlMinify = require('gulp-html-minify'),
	uglify = require('gulp-uglify');

gulp.task('default', function() {
	gulp.src('*.html')
	.pipe(htmlMinify())
	.pipe(gulp.dest('build/'));

	gulp.src('pay-select/*.html')
	.pipe(htmlMinify())
	.pipe(gulp.dest('build/pay-select/'));

	gulp.src('pay-select/*.js')
	.pipe(uglify())
	.pipe(gulp.dest('build/pay-select/'));
});