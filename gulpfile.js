var gulp         = require('gulp');
var gutil        = require('gulp-util');
var exec         = require('child_process').exec;
var concat       = require('gulp-concat');
var cleanCSS     = require('gulp-clean-css');
var uglify       = require('gulp-uglify');
var htmlmin      = require('gulp-htmlmin');
var imagemin     = require('gulp-imagemin');
var cheerio      = require('gulp-cheerio');
var runSequence  = require('run-sequence');
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
  To build the site, start a local dev server, watch files for changes, and auto reload the page:

    gulp build-dev

  To build the site and run tests, like link/spell check:

    gulp run-tests

Production:
  To build the site, minify CSS/JS, validate links, and insert the Google Analytics tracking code:

    gulp build-prod

    This is the command that the Jenkins build configs use. This block must be in the package.json file:
      "scripts": {
        "test": "test",
        "build": "gulp build-prod"
      }
*/

/*
* Build the site. Executes the built-in "jekyll build" shell command with the "JEKYLL_ENV=production" parameter set to ensure that the google analytics tracking code is inserted in all pages.
*/
gulp.task('make', function (cb) {
 exec('JEKYLL_ENV=production jekyll build', function (err, stdout, stderr) {
   console.log(stdout);
   console.log(stderr);
   cb(err);
 });
});

/*
* Build the site. Used for local development.
*/
gulp.task('jekyll-build', function (cb) {
   browserSync.notify(messages.jekyllBuild);
   exec('jekyll build', function (err, stdout, stderr) {
     console.log(stdout);
     console.log(stderr);
     cb(err);
   });
});

/*
* Compile the site, launch BrowserSync & watch files for changes. USed for local development.
*/
gulp.task('build-dev', function() {
  runSequence('jekyll-build', 'concat-js', 'concat-searchjs', 'minify', 'clean', 'watch', 'browser-sync');
});

//Build but don't serve or watch files for changes. Required for Jenkins build. Runs tasks sequentially because 'insert-analytics' won't work unless it runs AFTER 'make'. The release of Gulp v4 will probably break this, but it's a great workaround for now to insert the google analytics tracking code in the index.html file for production builds
gulp.task('build-prod', function() {
  runSequence('make', 'insert-analytics', 'concat-js', 'concat-searchjs', 'minify', 'clean', 'htmlproofer');
});

/*
* Rebuild the page after changing a file. Used for local development. Don't forget to add 'minify-js' after you figure out how to concatenate JS files.
*/
gulp.task('jekyll-rebuild', function () {
    runSequence('jekyll-build', 'minify-css', 'concat-js', 'concat-searchjs', 'minify-js', 'clean', 'reload');
});

/* Start a local server for the site at localhost:4000. Simply executes built-in "jekyll serve" shell command. Auto-regeneration enabled by default. No need for a separate gulp task to watch files.
*/
gulp.task('serve', function (cb) {
 exec('jekyll serve --skip-initial-build --no-watch', function (err, stdout, stderr) {
   console.log(stdout);
   console.log(stderr);
   cb(err);
 });
});

/*
* Wait for jekyll-build, then launch the server. Used for local development.
*/
gulp.task('browser-sync', function() {
   browserSync({
       server: {
           baseDir: '_site'
       }
   });
});

/*
* Reload the page after changing a file. Used for local development.
*/
gulp.task('reload', function () {
   browserSync.reload();
});

/*
* Recompile the site whenever a file changes. Used for local development.
*/
gulp.task('watch', function () {
   gulp.watch(['*.html', '_data/*.yml', '_includes/**/*', '_layouts/*.html', 'docs/**/*', 'css/*.css', 'js/*.js', 'images/**/*.+(png|jpeg|jpg|gif|svg)', '_config.yml'], ['jekyll-rebuild']);
   //Separate instructions for watching asset directories and running an additional gulp task, like minification:
   //gulp.watch('css/*.css', ['minify-css']);
   //gulp.watch('js/*.js', ['minify-js']);
   //gulp.watch('images/**/*.+(png|jpeg|jpg|gif|svg)', ['minify-images']);
});

/*
*  Concatenates and minifies all .css files and produces a single styles.css file in the _site/css directory.
*/
gulp.task('minify-css', function(){
 gulp.src('css/*.css')
 .pipe(concat('styles.css'))
 .pipe(uncss({
    html: ['_site/**/*.html'],
    ignore: [/tocify/]
  }))
 .pipe(cleanCSS({debug: true}, function(details) {
    console.log(details.name + ': ' + details.stats.originalSize);
    console.log(details.name + ': ' + details.stats.minifiedSize);
  }))
 .pipe(gulp.dest('_site/css/'));
});

/*
* Delete CSS files that have been concatenated in minify-css.
*/
gulp.task('clean', function() {
 del(['_site/css/materialize.css', '_site/css/style.css', '_site/css/jquery.tocify.css', '_site/css/highlightJS.css', '_site/js/materialize.js', '_site/js/jquery.tocify.js', '_site/js/search.js', '_site/js/lunr.js']).then(paths => {
    console.log('Deleted files and folders:\n', paths.join('\n'));
 });
});

/*
* Concatenates all .js files and produces a single scripts.js file in the _site/js directory.
*/
gulp.task('concat-js', function(){
  return gulp.src(['_site/js/materialize.js', '_site/js/jquery.tocify.js'])
    //Concatenates all files in _site/js/
    .pipe(concat('scripts.js'))
    .pipe(gulp.dest('_site/js/'))
    .on('error', gutil.log);
});

/*
* Concatenates search related .js files and produces a single search.js file in the _site/js directory.
*/
gulp.task('concat-searchjs', function(){
  return gulp.src(['_site/js/lunr.js', '_site/js/search.js'])
    //Concatenates all files in _site/js/
    .pipe(concat('searchjs.js'))
    .pipe(gulp.dest('_site/js/'))
    .on('error', gutil.log);
});

/*
* Minifies all .js files the _site/js directory.
*/
gulp.task('minify-js', function(){
  return gulp.src('_site/js/*.js')
    //Concatenates all files in _site/js/
    // .pipe(concat('scripts.js'))
    .pipe(uglify())
    .pipe(gulp.dest('_site/js/'))
    .on('error', gutil.log);
});

/*
* Minifies all .html files in the _site/ directory.
*/
gulp.task('minify-html', function(){
   gulp.src('_site/**/*.html')
   .pipe(htmlmin({collapseWhitespace: true}))
   .pipe(gulp.dest('_site'));
});

/**
Copy and minimize image files in _site/images directory.
*/
gulp.task('minify-images', function () {
  gulp.src('images/*')
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
    ]))
    .pipe(gulp.dest('_site/images'));
  });

/*
* Chain all minification tasks together.
*/
gulp.task('minify', ['minify-js', 'minify-css', 'minify-html', 'minify-images']);

/* Insert Google Analytics tracking code in index.html on production builds because Jekyll sucks sometimes and I can't use the logic for conditional builds that I'm using in _includes/head.html
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
* Compile the site and run all tests. Used for local development.
*/
gulp.task('run-tests', function() {
 runSequence('jekyll-build', 'htmlproofer');
});

/*
* Test uncss
*/
gulp.task('test', function() {
 runSequence('jekyll-build', 'minify-css', 'concat-js', 'concat-searchjs', 'minify-js', 'clean', 'serve');
});

/* Validate HTML, but ignore custom_404.html, custom_50x.html, search.html, and missing image alt tags. * Also ignores _site/reference b/c API links aren't generated during build; they're generated dynamically by tocify.js when opening a page in a browser. If we don't ignore this, we get loads of non-error errors.
* To ignore specific links, just add a 'data-proofer-ignore' attribute to any tag (e.g., <a href="http://notareallink" data-proofer-ignore>Not checked.</a>).
*/
gulp.task('htmlproofer', function (cb) {
  exec('htmlproofer ./_site --only-4xx --url-ignore "/reference/" --alt-ignore "/.*/" --allow-hash-href "true" --file-ignore "/custom|search/"',
  function (err, stdout, stderr) {
    gutil.log(gutil.colors.cyan(stdout));
    gutil.log(gutil.colors.red(stderr));
    cb(err);
  });
});
