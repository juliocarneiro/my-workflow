var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var stylus 		= require('gulp-stylus');
var reload      = browserSync.reload;

gulp.task('stylus', function(){  
  gulp.src('./css/style.styl')
  .pipe(stylus())
  .pipe(gulp.dest('./css/'));
});
gulp.task('watch', function(){
  	gulp.watch('**/*.styl', ['stylus']);
});

gulp.task('server', function () {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
	gulp.watch("*.html").on("change", reload);
	gulp.watch("css/*.css").on("change", reload);
	gulp.watch("js/*.js").on("change", reload);
});