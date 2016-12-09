[![CircleCI](https://circleci.com/gh/orangesys/orangesys.io.svg?style=svg)](https://circleci.com/gh/orangesys/orangesys.io)
# New orangesys.io

Web theme is based on [magneticio/vamp.io](https://github.com/magneticio/vamp.io) site.

## Writing content

1. Clone this repo

        $ git clone https://github.com/orangesys/orangesys.io.git

2. Download Hugo from [http://gohugo.io](http://gohugo.io) or install using Homebrew:

        $ brew update && brew install hugo

3. Build the vamp-theme by installing node modules and running gulp

        $ npm install && gulp build:dev


4. Run hugo in watch mode and start adding content under the `content/` tree

        $ hugo server --watch

    The site is server under `localhost:1313`
