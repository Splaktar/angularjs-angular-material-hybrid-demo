/* tslint:disable:no-var-requires */
const gulp = require('gulp');
const htmlmin = require('gulp-htmlmin');
const templateCache = require('gulp-angular-templatecache');

const templates = () => {
  return gulp
    .src('src/app/angularjs/**/*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(templateCache('templates.js', { standalone: true }))
    .pipe(gulp.dest('src/app/angularjs/templates'));
};

gulp.task('templates', templates);

gulp.task('watch', () => {
  return gulp.watch('src/app/angularjs/**/*.html', templates);
});
