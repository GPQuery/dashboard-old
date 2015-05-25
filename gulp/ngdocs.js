'use strict';

var gulp = require('gulp');

var gulpDocs = require('gulp-ngdocs');

module.exports = function(options) {
  gulp.task('ngdocs', function () {
    var options = {
      title: 'GPQuery Dashboard Documentation'
    };

    return gulp.src(options.src + '/app/**/*.js')
      .pipe(gulpDocs.process(options))
      .pipe(gulp.dest('./docs'));
  });
};