var gulp        = require('gulp');
var sass      = require('gulp-sass');
var browserSync = require('browser-sync').create();
var reload      = browserSync.reload;

gulp.task('sass', function() {
    gulp.src('sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css/'));
        gulp.watch('sass/**/*.scss',['sass']);
});

gulp.task('server', function () {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch("css/*.css").on("change", reload);
    gulp.watch("*.html").on("change", reload);
    gulp.watch("js/*.js").on("change", reload);
});