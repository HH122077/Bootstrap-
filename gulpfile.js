const gulp = require('gulp');
const sass = require("gulp-sass");

//sass.compiler = require('node-sass');

gulp.task('sass', function () {
  return gulp.src('res/sass/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('res/css/css'));
});
 
gulp.task('default', function () {
  gulp.watch('res/sass/*.scss', gulp.series('sass'));
});