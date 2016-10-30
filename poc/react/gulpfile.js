const gulp = require('gulp');
const babel = require('gulp-babel');
const del = require('del');
const exec = require('child_process').exec;

const paths = {
  allSrcJs: 'src/**/*.jsx',
  distDir: 'dist',
};

gulp.task('clean', () => {
  return del(paths.distDir);
});

gulp.task('build', ['clean'], () => {
  return gulp.src(paths.allSrcJs)
    .pipe(babel())
    .pipe(gulp.dest(paths.distDir));
});

gulp.task('watch', ['build'], () => {
  gulp.watch(paths.allSrcJs, ['build']);
});

gulp.task('default', ['watch']);
