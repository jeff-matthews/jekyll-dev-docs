This is the base Jekyll theme. You can find out more info about customizing your Jekyll theme, as well as basic Jekyll usage documentation at [jekyllrb.com](http://jekyllrb.com/).

You can find the source code for Jekyll at [jekyll](https://github.com/jekyll/jekyll).

## Requirements

 - Ruby (v2.1.2)
 - RubyGems (v2.2.2)
 - NodeJS (v4.4.5)
 - Linux, Unix, or Mac OS X

_**Note:** While not officially supported, it's evidently possible to run Jekyll on Windows. Click [here](https://jekyllrb.com/docs/windows/#installation) for more info._

## Getting Started

1. Clone the dev-docs repo

      `git clone git@bitbucket.org:affinipay/dev-docs.git`

3. Navigate to your local dev-docs directory

      `cd ~/dev-docs`

4. Install Jekyll

      `gem install jekyll`

5. Install Jekyll dependencies

      `bundle install`

6. Install GulpJS dependencies

      `npm install`

    _**Note:** We use GulpJS to automate build tasks. Current functionality is limited, however, production builds must execute the `gulp build` command to insert a Google Analytics tracking code in the site._

## Local Development

1. Navigate to your local `dev-docs` directory

2. Build and serve the doc site locally

      `rake watch`

3. Open a web browser and go to https://localhost:4000

      _**Note:** Standard Jekyll commands also work:_
       $ jekyll build
       $ jekyll serve
