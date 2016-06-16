'use strict';

import gulp from 'gulp';
import gulpGhPages from 'gulp-gh-pages';

gulp.task('deploy', ['prod'], function() {
	var options = {};
	
	if (process.env.CI)
	{
		var GH_TOKEN = process.env.GH_TOKEN
		options.remoteUrl = "https://${GH_TOKEN}@github.com/megabytemb/Wall-Clock.git"
	}

  // Any deployment logic should go here
return gulp.src('./build/**/*')
    .pipe(gulpGhPages(options));
});