
var gulp = require('gulp');
var gutil = require('gulp-util');  //responsible for console logging out build process debug purpose
var source = require('vinyl-source-stream'); //handles text files from one build part to another
var browserify = require('browserify'); //figures out what part depends on the other part, load order is done correctly
var watchify = require('watchify'); //tool to automatically run our gulp file during changes rerun build process
var reactify = require('reactify'); //works with browserify to convert jsx to js
var react = require('gulp-react');  //converts jsx to javascript
var concat = require('gulp-concat');


gulp.task('default', function(){
	var bundler = watchify(browserify({
		entries: ['./src/app.jsx'],  //app.jsx is the most parent component
		transform: [reactify],
		extensions: ['.jsx'],
		debug: true,
		cache: {},
		packageCache: {},
		fullPaths: true
	}))
	function build(file){ //build function will instantiate bundler
		if(file) gutil.log("recompiling "+ file);
		return bundler
			.bundle()
			.on('error', gutil.log.bind(gutil, "broserify error")) //throw error onto console
			.pipe(source('main.js')) //after bundler has completed, put it all into main.js, put in to ./ (cwd)
			.pipe(gulp.dest('./'));
	};
	build();
	bundler.on('update', build);  //update = if we make a change to src files, please run bundler again.
});