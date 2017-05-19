var gulp         = require('gulp');
var gutil        = require('gulp-util');
var exec         = require('child_process').exec;
var concat       = require('gulp-concat');
var cleanCSS     = require('gulp-clean-css');
var uglify       = require('gulp-uglify');
var htmlmin      = require('gulp-htmlmin');
var imagemin     = require('gulp-imagemin');
var cheerio      = require('gulp-cheerio');
var browserSync  = require('browser-sync');
var del          = require('del');
var uncss        = require('gulp-uncss');
var messages     = {
    jekyllBuild: '<span style="color:orange">Running:</span> $ jekyll build',
    jekyllServe: '<span style="color:orange">Serving:</span> $ jekyll serve'
};

/* Usage
You can run each gulp task independently by name. For example,

  gulp make
  gulp htmlproofer

Local Developement:
  To compile the site, start a local dev server, watch files for changes, and auto reload the page:

    gulp build-dev

  To compile the site and run tests, like link/spell check:

    gulp run-tests

QA:
  To compile the site, minify CSS/JS, validate links, insert the Google Analytics tracking code, and build domain-specific canonical links and feed.xml links:

    gulp build-qa

    This is the command that the Jenkins build configs use. This block must be in the package.json file:
      "scripts": {
        "test": "test",
        "build-prod": "gulp build-prod",
        "build-qa": "gulp build-qa"
      }

Production:
  To compile the site, minify CSS/JS, validate links, insert the Google Analytics tracking code, and build domain-specific canonical links and feed.xml links:

    gulp build-prod

    This is the command that the Jenkins build configs use. This block must be in the package.json file:
      "scripts": {
        "test": "test",
        "build": "gulp build-prod"
      }
*/

/*
* Compile the production site. Executes the built-in "jekyll build" shell command with the "JEKYLL_ENV=production" parameter set to insert the Google Analytics tracking code in the HTML.
*/
gulp.task('make-prod', function (cb) {
 exec('JEKYLL_ENV=production jekyll build', function (err, stdout, stderr) {
   gutil.log(gutil.colors.white(stdout));
   gutil.log(gutil.colors.red(stderr));
   cb(err);
 });
});

/*
* Compile the QA site. Executes the built-in "jekyll build" shell command with the "JEKYLL_ENV=qa" parameter set to build canonical links and feed.xml links correctly.
*/
gulp.task('make-qa', function (cb) {
 exec('JEKYLL_ENV=qa jekyll build', function (err, stdout, stderr) {
   gutil.log(gutil.colors.white(stdout));
   gutil.log(gutil.colors.red(stderr));
   cb(err);
 });
});

/*
* Compile the site. Used for local development.
*/
gulp.task('jekyll-build', function (cb) {
   browserSync.notify(messages.jekyllBuild);
   exec('jekyll build', function (err, stdout, stderr) {
     gutil.log(gutil.colors.white(stdout));
     gutil.log(gutil.colors.red(stderr));
     cb(err);
   });
});

/*
* Start a local web server for the site at localhost:4000. Simply executes built-in "jekyll serve" shell command. Auto-regeneration and file watch is enabled by default, so the --<options> turn those off.
*/
gulp.task('serve', function (cb) {
 exec('jekyll serve --skip-initial-build --no-watch', function (err, stdout, stderr) {
   console.log(stdout);
   console.log(stderr);
   cb(err);
 });
});

/*
* Wait for jekyll-build, then launch a local web server. Used for local development.
*/
gulp.task('browser-sync', function() {
   browserSync({
       server: {
           baseDir: '_site'
       }
   });
});

/*
* Reload the page after changing, adding, or removing a file. Used for local development.
*/
gulp.task('reload', function (done) {
   browserSync.reload();
   done();
});

/*
* Minify and concatenate all .css files into a single styles.css file in the _site/css directory.
*/
gulp.task('minify-css', function(){
 return gulp.src('css/*.css')
 .pipe(concat('styles.css'))
 .pipe(uncss({
    html: ['_site/**/*.html'],
    ignore: [/tocify/]
  }))
 .pipe(cleanCSS({debug: true}, function(details) {
    gutil.log(gutil.colors.yellow(details.name + ': ' + details.stats.originalSize));
    gutil.log(gutil.colors.green(details.name + ': ' + details.stats.minifiedSize));
  }))
 .pipe(gulp.dest('_site/css/'));
});

/*
* Delete .css and .js files after concatenating in minify-css, minify-js, concat-js, and concat-searchjs.
*/
gulp.task('clean', function(done) {
 del(['_site/css/materialize.css', '_site/css/style.css', '_site/css/jquery.tocify.css', '_site/css/highlightJS.css', '_site/js/search.js', '_site/js/lunr.js']).then(paths => {
    gutil.log(gutil.colors.yellow('Deleted files and folders:\n', paths.join('\n')));
 });
 done();
});

/*
* Concatenate search-related .js files into a single search.js file in the _site/js directory.
*/
gulp.task('concat-searchjs', function(){
  return gulp.src(['_site/js/lunr.js', '_site/js/search.js'])
    //Concatenates all files in _site/js/
    .pipe(concat('searchjs.js'))
    .pipe(gulp.dest('_site/js/'))
    .on('error', gutil.log);
});

/*
* Minify all .js files in the _site/js directory.
*/
gulp.task('minify-js', function(){
  return gulp.src('_site/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('_site/js/'))
    .on('error', gutil.log);
});

/*
* Minify all .html files in the _site/ directory.
*/
gulp.task('minify-html', function(){
   return gulp.src('_site/**/*.html')
   .pipe(htmlmin({collapseWhitespace: true}))
   .pipe(gulp.dest('_site'));
});

/*
* Copy and minimize image files in the _site/images directory. This task takes about 2 minutest to minimize 30 images.
*/
gulp.task('minify-images', function () {
  return gulp.src('images/*')
    .pipe(imagemin([
      /*
      * The imagemin defaults are ok, except when optimizing SVGs. Optimized SVGs contain duplicated text labels for some reason (TP-250). Overriding the cleanupIDs plugin seems to fix the issue, but I don't know why.
      * https://github.com/svg/svgo
      * https://github.com/svg/svgo/issues/553
      * https://github.com/sindresorhus/gulp-imagemin/releases/tag/v3.0.0
      */
      imagemin.gifsicle({interlaced: true}),
      imagemin.jpegtran({progressive: true}),
      imagemin.optipng({optimizationLevel: 5}),
      imagemin.svgo({plugins: [{cleanupIDs: false}]})
    ], {
      //Show me info about each processed image in in the console.
      verbose: true
    }))
    .pipe(gulp.dest('_site/images'));
  });

/*
* Chain all minification tasks together.
*/
gulp.task('minify', gulp.series(gulp.parallel('minify-js', 'minify-css', 'minify-html', 'minify-images')));

/*
* Insert a Google Analytics tracking code in index.html on production builds because Jekyll sucks sometimes and I can't use the logic for conditional builds that I'm using in _includes/head.html.
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
});

/*
* Validate HTML, but ignore custom_404.html, custom_50x.html, search.html, and missing image alt tags. This task relies on the html-proofer rubygem that gets installed from the Gemfile.
* Also ignores _site/reference b/c API links aren't generated during build; they're generated dynamically by jquery.tocify.js on page load. If we don't ignore this, we get loads of non-error errors.
* To ignore specific links, just add a 'data-proofer-ignore' attribute to any tag (e.g., <a href="http://notareallink" data-proofer-ignore>Not checked.</a>).
*/
gulp.task('htmlproofer', function (cb) {
  exec('htmlproofer ./_site --only-4xx --url-ignore "/reference/" --alt-ignore "/.*/" --allow-hash-href "true" --file-ignore "/custom|search/"',
  function (err, stdout, stderr) {
    gutil.log(gutil.colors.green(stdout));
    gutil.log(gutil.colors.red(stderr));
    cb(err);
  });
});

/*
* Compile the site for production, but don't serve or watch files. Required for Jenkins build.
*/
gulp.task('build-prod', gulp.series('make-prod', 'insert-analytics', 'concat-searchjs', 'minify', 'clean', 'htmlproofer', function(done) {
  done();
}));

/*
* Compile the site for QA, but don't serve or watch files. We added this task to make sure jekyll creates domain-specific URLs for canonical and feed.xml links. Required for Jenkins build. See the following files for template logic that passes in either a "qa" or "production" environment variable:
  - feed.xml
  - _includes/head.html
*/
gulp.task('build-qa', gulp.series('make-qa', 'insert-analytics', 'concat-searchjs', 'minify', 'clean', 'htmlproofer', function(done) {
  done();
}));

/*
* Recompile the site after changing, adding, or removing a file. Used for local development.
*/
gulp.task('jekyll-rebuild', gulp.series('jekyll-build', 'minify-html', 'minify-css', 'concat-searchjs', 'minify-js', 'clean', 'reload', function(done) {
  done();
}));

/*
* Compile the site and run all tests. Used for local development.
*/
gulp.task('run-tests', gulp.series('jekyll-build', 'htmlproofer', function(done) {
  done();
}));

/*
* Debug ad-hoc tasks
*/
gulp.task('test', gulp.series('jekyll-build', 'minify-css', 'concat-searchjs', 'minify-js', 'clean', 'serve', function(done) {
 done();
}));

/*
* Recompile the site and reload the browser whenever changing, adding, or removing a file. Used for local development.
*/
gulp.task('watch', function(done) {
  var watcher = gulp.watch(['*.html', '_data/*.yml', '_includes/**/*', '_layouts/*.html', 'docs/**/*', 'css/*.css', 'js/*.js', 'images/**/*.+(png|jpeg|jpg|gif|svg)', '_config.yml'], gulp.series('jekyll-rebuild'));
    watcher.on('change', function(path, stats) {
      gutil.log(gutil.colors.bgYellow.black('File ' + path + ' has been changed. Recompiling...'));
    });
    watcher.on('add', function(path) {
      gutil.log(gutil.colors.bgYellow.black('File ' + path + ' has been added. Recompiling...'));
    });
    watcher.on('unlink', function(path) {
      gutil.log(gutil.colors.bgYellow.black('File ' + path + ' has been removed. Recompiling...'));
    });
  done();
});

/*
* Compile the site, launch BrowserSync, and watch files for changes. Used for local development.
*/
gulp.task('build-dev', gulp.series('jekyll-build', 'concat-searchjs', 'minify-js', 'minify-css', 'minify-html', 'clean', 'watch', 'browser-sync', function(done) {
 done();
}));
