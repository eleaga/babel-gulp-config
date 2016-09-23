var gulp = require('gulp');
var jshint = require('gulp-jshint');
var sourcemaps = require("gulp-sourcemaps");
var babel = require("gulp-babel");
var concat = require("gulp-concat");
var qunit = require('gulp-qunit');

gulp.task('watch', function() {
  gulp.watch('./babel/*.js', ['babel','qunit','jshint']);
});

gulp.task('qunit', function() {
    return gulp.src('./qunit/test-runner.html')
        .pipe(qunit());
});

gulp.task('default', function() {  
	gulp.src('js/babel.js')
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('jshint-stylish'));

});


gulp.task('jshint', function () {
	gulp.src('babel/*.js')
	    .pipe(jshint('.jshintrc'))
	    .pipe(jshint.reporter('jshint-stylish'));
});


//es6
gulp.task("babel", function () {
  return gulp.src("babel/*.js")
    .pipe(sourcemaps.init())
    .pipe(babel({
        presets: ['es2015']
    }))
    .pipe(concat("babel.js"))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("js"));
});