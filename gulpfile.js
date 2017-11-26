// Include used packages / plugins
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    bs = require('browser-sync').create(),
    uglify = require("gulp-uglify");

// On error, output it to command line / terminal
function showError(error) {
  console.log(error.toString());
  this.emit('end');
}

/** GULP TASKS **/
// Gulp task for Browsersync
gulp.task('browser-sync', function() {
  // Initialize browser sync
  bs.init({
    server: {
      baseDir: "./" // Starting the server at the directory that this file is in
    }
  });
});
// Gulp task for minifying js files
gulp.task('minify-js', function () {
  return gulp.pipe(uglify())           // Action
  .on('error', showError)              // Instead of exiting on error, perform showError function
  .pipe(gulp.dest('./public/js'));     // Destination folder
});
// Gulp task for Sass
gulp.task('sass', function () {
  return gulp.pipe(sass())                   // Action
    .on('error', showError)              // Instead of exiting on error, perform showError function
    .pipe(gulp.dest('./public/css'))     // Destination folder
    .pipe(bs.reload({stream: true}));    // Reload browser
});
// The watch task to summarize it all
gulp.task('watch', [ 'browser-sync' ], function () {
  // Watch changes for...
  gulp.watch('src/js/*.js', [ 'minify-js' ]);       // ...all .js files in ./src/js 
  gulp.watch('src/scss/*.scss', [ 'sass' ]);        // ...all .scss files in ./src/scss 
  gulp.watch('index.html').on('change', bs.reload); // ...index.html at the root (./index.html)
});