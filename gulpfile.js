var gulp        = require('gulp');
var gutil       = require('gulp-util');
var browserSync = require('browser-sync').create();
var minifyCSS   = require('gulp-cssnano');
var prefix      = require('gulp-autoprefixer');
var ftp         = require( 'vinyl-ftp' );

// fetch command line arguments
const arg = (argList => {
    let arg = {}, a, opt, thisOpt, curOpt;
    for (a = 0; a < argList.length; a++) {
  
      thisOpt = argList[a].trim();
      opt = thisOpt.replace(/^\-+/, '');
  
      if (opt === thisOpt) {
        // argument value
        if (curOpt) arg[curOpt] = opt;
        curOpt = null;
  
      }
      else {
        // argument name
        curOpt = opt;
        arg[curOpt] = true;
  
      }
    }
    return arg;
  })(process.argv);

// static server
gulp.task('sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        },
        files: ["index.html", "css/**/*.css"]
    });
});

// upload website to world4you
gulp.task( 'deploy', function () {
    var conn = ftp.create( {
        host:       'ftp31.world4you.com',
        user:       arg.user || arg.u,          // from the command line -user or -u
        password:   arg.password || arg.p,      // from the command line -password or -p
        parallel:   1,
        log:        gutil.log
    });

    var globs = [
        'css/**',
        'fonts/**',
        'img/**',
        'js/**',
        'index.html'
    ];

    var ftp_dest_dir = '/';

	// using base = '.' will transfer everything to /public_html correctly
	// turn off buffering in gulp.src for best performance
    return gulp.src( globs, { base: '.', buffer: false } )
        .pipe( conn.newer( ftp_dest_dir ) ) // only upload newer files
        .pipe( conn.dest( ftp_dest_dir ) );
});

gulp.task('copy', function() {

    return gulp.src('./js/**/*.js').pipe(gulp.dest('dist'))

});

gulp.task('styles', function() {

    return gulp.src(['css/app.css','css/foundation.css'])
    //.pipe(minifyCSS())
    .pipe(prefix())
    .pipe(gulp.dest('dist/css/'));

});