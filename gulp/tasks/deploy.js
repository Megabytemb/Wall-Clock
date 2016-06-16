'use strict';

import gulp from 'gulp';
import gulpGhPages from 'gulp-gh-pages';

gulp.task('deploy', ['prod'], function() {

  // Any deployment logic should go here
return gulp.src('./build/**/*')
    .pipe(gulpGhPages());
});