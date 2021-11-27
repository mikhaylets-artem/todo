const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const del = require('del');
// const sourcemaps = require('gulp-sourcemaps');
const clean = require('gulp-clean-css');

gulp.task('styles', () => {
  return gulp
    .src('src/styles/scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(clean())
    .pipe(gulp.dest('src/styles/css/'));
});

gulp.task('clean', () => {
  return del(['src/styles/css/main.css']);
});

gulp.task('default', gulp.series(['clean', 'styles']));

gulp.task('watch', () => {
  gulp.watch('src/styles/scss/*.scss', (done) => {
    gulp.series(['clean', 'styles'])(done);
  });
});