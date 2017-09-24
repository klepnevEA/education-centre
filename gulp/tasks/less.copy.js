'use strict';





module.exports = function() {
  $.gulp.task('less.copy', function() {
    return $.gulp.src('./source/style/**/*.less')
      // .pipe($.gp.sourcemaps.init())
      // .pipe($.gp.sass()).on('error', $.gp.notify.onError({ title: 'Style' }))
      // .pipe($.gp.autoprefixer({ browsers: $.config.autoprefixerConfig }))
      // .pipe($.gp.sourcemaps.write())
      .pipe($.gulp.dest($.config.root + '/less'))
      .pipe($.browserSync.stream());
  })
};

