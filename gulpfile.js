var gulp         = require('gulp');
var gutil        = require('gulp-util');
var exec         = require('child_process').exec;
var cleanCSS     = require('gulp-clean-css');
var uglify       = require('gulp-uglify');
var imagemin     = require('gulp-imagemin');
var pngquant     = require('imagemin-pngquant');
var cheerio      = require('gulp-cheerio');
var runSequence  = require('run-sequence');
var messages     = {
    jekyllBuild: '<span style="color: orange">Running:</span> $ jekyll build',
    jekyllServe: '<span style="color:orange">Serving:</span> $ jekyll serve'
};

/**
 * Build the Jekyll Site. Executes the built-in "jekyll build" shell command with the "JEKYLL_ENV=production" parameter set to ensure that the google analytics tracking code is inserted in all pages.
 */
 gulp.task('make', function (cb) {
   exec('JEKYLL_ENV=production jekyll build', function (err, stdout, stderr) {
     console.log(stdout);
     console.log(stderr);
     cb(err);
   });
 })

 /**
 * minifiy css
 */
 gulp.task('minify-css', function() {
    return gulp.src('css/*.css')
        .pipe(cleanCSS({debug: true, processImport: false}, function(details) {
            console.log(details.name + ': ' + details.stats.originalSize);
            console.log(details.name + ': ' + details.stats.minifiedSize);
        }))
        .pipe(gulp.dest('_site/css'));
});

/**
* minifiy js
*/
gulp.task('minify-js', function() {
  gulp.src('js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('_site/js'))
});

/**
 * Copy and minimize image files; not currently in use
*/
gulp.task('optimize:images', function() {
  return gulp.src('images/*.png')
    .pipe(imagemin({optimizationLevel: 3, progressive: true, interlaced: true}))
    .pipe(gulp.dest('_site/images'))
    .pipe(size());
});

/*
* Enables scrollspy on topic pages by wrapping h2s in a div, adding the requisite div class, and inserting h2 IDs into the div

//define wrapAll function because cheerio doesn't support the wrapAll jquery API call
function wrapAll(selector, wrapper) {
    (selector).first().before(wrapper).prev().append(selector);
}

gulp.task('scrollspyer', function () {
  return gulp
    .src(['_site/<double-asterisks>/<asterisk>.html'])
    .pipe(cheerio({
      run: function ($, file) {
        // Each file will be run through cheerio and each corresponding `$` will be passed here.
        // `file` is the gulp file object
        // wrap h2s and all elements until next h2 in a div
        $('div.post-content h2').each(function(){
            var $set = $(this).nextUntil("h2").addBack();
            var $wrapper = $('<div class="section scrollspy" />');
            wrapAll($set, $wrapper);
            });
        // create anchor ID for each scrollspy section
        $('div.post-content h2').each(function() {
            var scrollspyClassName = $(this).text().split(' ').join('-').split('\/').join('-').replace(/[|&;$%@"<>()+,.:?']/g, "").toLowerCase();
            $(this).parent('div').attr('id', scrollspyClassName);
          });
      }
    }))
    .pipe(gulp.dest('_site/'));
});
*/
/* Insert Google Analytics tracking code in index.html on production builds because Jekyll sucks sometimes * and I can't use the logic for conditional builds that I'm using in _includes/head.html
*/
gulp.task('insert-analytics', function () {
  return gulp
  .src(['_site/index.html'])
  .pipe(cheerio({
    run: function ($, file) {
      $('head').append('<script src="js/analytics.js"><\/script>');
    }
  }))
  .pipe(gulp.dest('_site/'));
})
/**
* Start a local server for the site at localhost:4000. Simply executes built-in "jekyll serve" shell command. Auto-regeneration enabled by default. No need for a separate gulp task to watch files.
*/
gulp.task('serve', function (cb) {
  exec('jekyll serve', function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
})

//Build, serve, and watch files for changes.  Used for development.
gulp.task('default', ['make', /*'scrollspyer',*/'minify-css', 'minify-js', 'serve']);

//Build but don't serve or watch files for changes. Required for Jenkins build. Runs tasks sequentially because 'insert-analytics' won't work unless it runs AFTER 'make'. The release of Gulp v4 will probably break this, but it's a great workaround for now to insert the google analytics tracking code in the index.html file for production builds
gulp.task('build', function(done) {
    runSequence('make', 'insert-analytics', 'minify-css', 'minify-js', function() {
        console.log('Run something else');
        done();
    });
});
