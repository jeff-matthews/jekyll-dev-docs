The [AffiniPay developer documentation site](https://developers.affinipay.com) is based on the following components:

- **[Jekyll](http://jekyllrb.com/)** - Static site generator that compiles source files (e.g., markdown, HTML, YAML) into a working static HTML site.
- **[Materialize](http://materializecss.com/)** - JS/CSS framework based on Google's material design principles.
- **[Tocify.js](http://gregfranko.com/jquery.tocify.js/)** - A jQuery plugin that dynamically generates a table of contents based on HTML headings. We use this for our API reference.
- **[Lunr.js](http://lunrjs.com/)** - A simple full text search engine for client-side applications.
- **[Clipboard.js](https://clipboardjs.com/)** - A JS-based library for copying text to a clipboard. We use this for making code samples easy to copy.
- **[Gulp.js](http://gulpjs.com/)** - A JS task runner that makes automation easier. We use this to build/compile the site.

## Requirements

 - Ruby (v2.4.0)
 - RubyGems (v2.6.8)
 - NodeJS (v6.9.5)
 - Linux, Unix, or Mac OS X

_**Note:** While not officially supported, it's evidently possible to run Jekyll on Windows. Click [here](https://jekyllrb.com/docs/windows/#installation) for more info._

## Installation

1. Clone the dev-docs repo

      `git clone git@bitbucket.org:affinipay/dev-docs.git`

3. Navigate to your local dev-docs directory

      `cd ~/dev-docs`

4. Install bundler

      `gem install bundler`

5. Install Jekyll and Jekyll dependencies

      `bundle install`

6. Install GulpJS globally

      `npm install -g gulp`

7. Install GulpJS dependencies

      `npm install`

    _**Note:** We use Gulp to automate build tasks. Several different gulp tasks are available for local development, but there is a single production build task (e.g., `gulp build-prod`). In addition to compiling the site and minifying assets, the `gulp build-prod` command inserts a Google Analytics tracking code in the site._

## Local development
To compile the site and start a local web server to view changes:

1. Navigate to your local `dev-docs` directory

2. Build and serve the doc site locally

      `gulp build-dev`

    This task compiles the site, minifies HTML/CSS/JS/images, launches a local web server, and watches for file changes. BrowserSync will reload your browser whenever you make a local change.

3. Open a web browser and go to https://localhost:3000

      _**Note:** Standard Jekyll commands also work:_
       $ jekyll build
       $ jekyll serve

## Running tests
Currently, we only run one test after compiling the site. The task is `gulp htmlproofer` and it runs as part of the following tasks:

- `gulp build-prod`
- `gulp run-tests`

This task validates internal and external links. You should run tests before committing code, but if you forget, the Jenkins build config will run it and fail if it encounters any broken links. We'll add more tests in the future.

## Production builds
The Jenkins build server takes care of production builds, but if you need to run one manually, enter `gulp build-prod` or `npm run build`. This task compiles the site, minifies HTML/CSS/JS/images, and inserts a Google Analytics tracking code. The Jenkins build configuration runs some additional post-build steps, such as versioning and git tagging, but that's not relevant to this document.
