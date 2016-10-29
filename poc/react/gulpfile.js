const gulp = require('gulp');
const babel = require('gulp-babel');
const del = require('del');
const exec = require('child_process').exec;

const paths = {
  allSrcJs: 'src/**/*.jsx',
  appDir: 'app',
};

gulp.task('clean', () => {
  return del(paths.appDir);
});

gulp.task('build', ['clean'], () => {
  return gulp.src(paths.allSrcJs)
    .pipe(babel())
    .pipe(gulp.dest(paths.appDir));
});

gulp.task('watch', ['build'], () => {
  gulp.watch(paths.allSrcJs, ['main']);
});

gulp.task('default', ['watch']);
