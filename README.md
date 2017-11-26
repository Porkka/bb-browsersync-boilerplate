# Bare-bones Frontend Boilerplate
Bare-bones boilerplate for quickly starting out projects such as mock-up templates or testing simple front end snippets.
## Contents
Using Gulp (https://gulpjs.com) the boilerplate has tasks for:
- Browsersync to automaticly update the browser when file(s) change
  - BrowserSync: https://browsersync.io/docs/gulp
  - BrowserSync + Gulp: https://github.com/Browsersync/browser-sync
  - BrowserSync (Github): https://github.com/Browsersync/browser-sync
- Sass for easier CSS writing
  - Sass: http://sass-lang.com/
  - Sass (Github): https://github.com/sass/sass
  - gulp-sass: https://github.com/dlmanning/gulp-sass
- gulp-uglify for minifying JavaScript
  - gulp-uglify: (gulp-uglify: https://github.com/terinjokes/gulp-uglify)
## Requirements
- Node.js package installer: https://nodejs.org/en
- Gulp for running tasks / building project: https://gulpjs.com
  - Gulp for Beginners https://css-tricks.com/gulp-for-beginners
## Usage
After cloning this project, just run ```npm install``` and then ```gulp watch``` in the project directory. This should open up your browser at ```http://localhost:3000```. You can now start editing your files and the changes would be automatically updated to the browser. This makes the development process more enjoyable.
## Gulp settings
Gulp settings are located in ```./gulpfile.js```. Feel free to include other packages / plugins to the pipeline.
You can also
- Change the source (```./src```) or destination (```./public```) folders
- Add or Remove files that are watched
## Folder structure
#### Development
Here are the files you would modify. The same files are then taken trought the pipeline and outputted to ```./public``` folder.
```
./src/
  js/
    app.js
  scss/
    _reset.scss
    _variables.scss
    style.scss
```
#### "Production" / The files you would include to your project
Modifications to the files coming out from the pipeline are overwritten by Gulp. In this case modifications to ```app.js``` and ```style.css``` would be overwritten. 
```
./public/
  js/
    app.js
  css/
    style.css
  ...
```
Personally I would also put resources like images here. For examle ```./public/img/image.png```. In Scss the image would be then refrenced with ```/public/img/image.png```.
