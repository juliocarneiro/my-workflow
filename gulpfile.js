gulp        = require('gulp'),
sass        = require('gulp-sass'),
changed     = require('gulp-changed'),
browserSync = require('browser-sync');
imagemin    = require('gulp-imagemin');

gulp.task('sass', function () {
gulp.src('./sass/style.scss')
    .pipe(sass({outputStyle: 'compressed'}))
    .on('error', function (err) { console.log(err.message); })
    .pipe(gulp.dest('./css'));
});

gulp.task('browser-sync', function() {
    browserSync.init(['./*.html', './css/*.css', './js/*.js'], {
        server: {
            baseDir: './',
            index: './index.html'
        }
    });
});

gulp.task('watch', ['sass', 'browser-sync'], function () {
    gulp.watch('./sass/**/*.scss', ['sass']);
    gulp.src('img/*').pipe(imagemin()).pipe(gulp.dest('img'))
});