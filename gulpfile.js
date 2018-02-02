var gulp = require('gulp'),
	uglify = require('gulp-uglify');

gulp.task('default', function() {
	gulp.src('*.html')
	.pipe(gulp.dest('build/'));

	gulp.src('pay-select/*.html')
	.pipe(gulp.dest('build/pay-select/'));

	gulp.src('pay-select/*.js')
	.pipe(uglify())
	.pipe(gulp.dest('build/pay-select/'));
});