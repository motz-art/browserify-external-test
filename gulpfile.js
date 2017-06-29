var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var sourcemaps = require('gulp-sourcemaps');

const vendors = ['pdfkit'];

gulp.task('build:vendor', function () {
  const b = browserify({
    debug: true
  });

  // require all libs specified in vendors array
  vendors.forEach(lib => {
    b.require(lib);
  });

  b.bundle()
  .pipe(source('vendor.js'))
  .pipe(buffer())
  .pipe(sourcemaps.init({loadMaps: true}))
  .pipe(sourcemaps.write('./maps'))
  .pipe(gulp.dest('./dist/'))
  ;
});

gulp.task('build:app', function () {
  browserify({
    entries: ['./src/index.js'],
    extensions: ['.js'],
    debug: true
  })
  .external(vendors) // Specify all vendors as external source
  .bundle()
  .pipe(source('app.js'))
  .pipe(buffer())
  .pipe(sourcemaps.init({loadMaps: true}))
  .pipe(sourcemaps.write('./maps'))
  .pipe(gulp.dest('dist/'))
  ;
});

gulp.task('default', ['build:app', 'build:vendor']);