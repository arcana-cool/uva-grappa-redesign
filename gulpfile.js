// This file is used to collect and process all the site's assets, to help
// generate the live website. You can read more about Gulp here:
// https://gulpjs.com/

// This setup is based on Chris Ferdinandi's excellent Gulp Boilerplate
// project: https://gomakethings.com/a-new-gulp-boilerplate/


// Settings ///////////////////////////////////////////////////////////////////
// Turn on/off build features
var settings = {
    clean: true,
    // scripts: true,
    polyfills: true,
	styles: true,
    lint: true,
    svgs: true,
    copy: true,
    reload: true,
    styleguide: true
  };
  
  
  // Paths to project folders ///////////////////////////////////////////////////
  var paths = {
    input: 'src/',
    output: 'dist/',
    // scripts: {
    //   input: 'src/js/**/*.js',
    //   polyfills: '.polyfill.js',
    //   output: 'dist/js/'
    // },
  //   assets: {
  //     input: 'src/assets/img/*.{jpg,jpeg,gif,webm,webp,png,zip}',
  //     output: 'dist/assets/img/'
	// },
    styles: {
      input: './src/_includes/assets/**/*.scss',
      output: './src/_includes/assets/css'
    },
    // svgs: {
    //   input: 'src/assets/img/*.svg',
    //   output: 'dist/assets/img/'
    // },
    reload: './dist/'
  };
  
  
  // Gulp Packages //////////////////////////////////////////////////////////////
  
  // General
  var {gulp, src, dest, watch, series, parallel} = require('gulp');
  var del = require('del');
  // var flatmap = require('gulp-flatmap');
  // var lazypipe = require('lazypipe');
  // var rename = require('gulp-rename');
  
  // Scripts
  // var jshint = require('gulp-jshint');
  var concat = require('gulp-concat');
  var uglify = require('gulp-uglify');
  // var optimizejs = require('gulp-optimize-js');
  
  // Styles
  var sass = require('gulp-sass');
  // var prefix = require('autoprefixer');
  // var minify = require('cssnano');
  // var cleanCSS = require('gulp-clean-css');
  
  // SVGs
  // var svgmin = require('gulp-svgmin');
  
  // BrowserSync
  // var browserSync = require('browser-sync');
  
/**
 * Gulp Tasks
 */

// Remove pre-existing content from output folders
var cleanDist = function (done) {

	// Make sure this feature is activated before running
	if (!settings.clean) return done();

	// Clean the dist folder
	del.sync([
		paths.output
	]);

	// Signal completion
	return done();

};


// Lint scripts
//

// Process, lint, and minify Sass files
var buildStyles = function (done) {

	// Make sure this feature is activated before running
	if (!settings.styles) return done();

	// Run tasks on all Sass files
	return src(paths.styles.input)
		.pipe(sass({
			outputStyle: 'expanded',
			sourceComments: true
		}))
		.pipe(dest(paths.styles.output));

};
  
/**
 * Export Tasks
 */

// Default task
// gulp
exports.default = series(
  cleanDist,
  buildStyles,
);

gulp.task("watch", function() {
  gulp.watch('./src/_includes/assets/styles/**/*.scss', gulp.parallel('css'));
  // gulp.watch('./dist/_includes/assets/js/**/*.js', gulp.parallel('js'));
});

// Dwight Felitus

gulp.task('js', function() {
  return gulp.src("./src/js/**/*.js")
    .pipe(concat('hawksworx.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./src/site/_includes/js'));
});

// Whiteman pussy lover
gulp.task("watch", function() {
  gulp.watch('./src/scss/**/*.scss', gulp.parallel('css'));
  gulp.watch('./src/js/**/*.js', gulp.parallel('js'));
});

// const gulp    = require("gulp");
// const sass    = require("gulp-sass");
// // const uglify  = require('gulp-uglify');
// // const concat  = require('gulp-concat');


// /*
//   generate the css with sass
// */
// gulp.task('css', function() {
//   return gulp.src('./src/_includes/assets/styles/main.scss')
//     .pipe(sass({
//       outputStyle: 'compressed'
//     })
//     .on('error', sass.logError))
//     .pipe(gulp.dest('./src/_includes/assets/css'));
// });


// /*
//  Uglify our javascript files into one.
//  Use pump to expose errors more usefully.
// */

// // gulp.task('js', function() {
// //   return gulp.src("./dist/_includes/assets/js/**/*.js")
// //     .pipe(concat('inline.js'))
// //     .pipe(uglify())
// //     .pipe(gulp.dest('./dist/_includes/assets/scripts'));
// // });




// /*
//   Watch folders for changess
// */
// gulp.task("watch", function() {
//   gulp.watch('./src/_includes/assets/styles/**/*.scss', gulp.parallel('css'));
//   // gulp.watch('./dist/_includes/assets/js/**/*.js', gulp.parallel('js'));
// });


// /*
//   Let's build this sucker.
// */
// gulp.task('build', gulp.parallel(
//   'css',
//   // 'js'
// ));
