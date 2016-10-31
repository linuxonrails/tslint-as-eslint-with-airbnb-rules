var gulp        = require('gulp');
var eslint      = require('gulp-eslint');
var tslint      = require("gulp-tslint");

gulp.task('eslint', function () {
  gulp.src('src/foobar.js')
  .pipe(eslint({
    baseConfig: {
      "extends": "airbnb-base"
    }
  }))
  .pipe(eslint.format())
  .pipe(eslint.failAfterError())
  .on('error', function (err) {
    console.log("Errors/warnings detected with ESLint!");
  });
});

gulp.task('tslint', function () {
  gulp.src('src/foobar.ts')
  .pipe(tslint({
    formattersDirectory: 'node_modules/custom-tslint-formatters/formatters',
    formatter: 'grouped', // from custom-tslint-formatters
    // contains rules in the tslint.json format
    configuration: "src/tslint.json"
  }))
  .pipe(eslint.format())
  .pipe(eslint.failAfterError())
  .pipe(tslint.report())
  .on('error', function (err) {
    console.log("Errors/warnings detected with tslint!");
  });
});

gulp.task('default', ['eslint', 'tslint']);
