const gulp = require('gulp');
const htmlmin = require('gulp-htmlmin');
const templateCache = require('gulp-angular-templatecache');

gulp.task('templates', () => {
  return gulp.src('src/angularjs/**/*.html')
  .pipe(htmlmin({collapseWhitespace: true}))
  .pipe(templateCache('templates.js', {standalone: true}))
  .pipe(gulp.dest('src/angularjs/templates'));
});
