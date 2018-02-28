var gulp = require('gulp'),
	htmlMinify = require('gulp-html-minify'),
	uglify = require('gulp-uglify'),
	browserSync = require('browser-sync').create(),
	reload = browserSync.reload;

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

// 静态服务器
gulp.task('serve', function () {
	browserSync.init({
		server: {
			baseDir: './'
		}
	});

	gulp.watch('./pay-select/*').on('change', reload);
	gulp.watch('./*.html').on('change', reload);
});