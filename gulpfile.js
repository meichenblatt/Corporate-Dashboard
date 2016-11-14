
var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var uglify = require('gulp-uglify');
var pump = require('pump');
var cleanCSS = require('gulp-clean-css');
var concat = require('gulp-concat');
var clean = require('gulp-clean');


gulp.task('default', ['browserSync'], function() {
	
	gulp.watch('**/*.html').on('change', browserSync.reload);
	
});

gulp.task('browserSync', function(cb){
	return browserSync.init({
		server: './src/'
	}, cb);
});




gulp.task('serve:dist', ['concatjs'], function(){

	browserSync.init({
		server: './dist/'
	});

});


gulp.task('clean', function () {
	return gulp.src(['dist/tmpl','dist/css','dist/js','src/compressed'], {read: false})
        .pipe(clean());
});

gulp.task('tmpl',['clean'], function () {
	return gulp.src('src/tmpl/*/')
    .pipe(gulp.dest('dist/tmpl/'));
});

gulp.task('minify-css', ['tmpl'], function() {
  return gulp.src('src/css/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('src/compressed'));
});

gulp.task('concatcss', ['minify-css'], function() {
  return gulp.src(['./src/compressed/bootstrap.min.css',
    './src/compressed/font-awesome.min.css',
    './src/compressed/style.css'])
    .pipe(concat('all.min.css'))
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('compress', ['concatcss'], function (cb) {
  
  pump([
        gulp.src(['src/js/*.js', 'src/controllers/*.js', 'src/app.js']),
        uglify({mangle:false}),
        gulp.dest('src/compressed')
    ],
    cb
  );
  
});


gulp.task('concatjs', ['compress'], function() {
  return gulp.src(['./src/compressed/angular.min.js',
    './src/compressed/angular-route.min.js',
    './src/compressed/angular-resource.min.js',
    './src/compressed/angular-simple-logger.js',
    './src/compressed/lodash.js',
    './src/compressed/angular-google-maps.js',
    './src/compressed/chart.min.js',
    './src/compressed/angular-chart.min.js',
    './src/compressed/jquery-3.1.1.min.js',
    './src/compressed/bootstrap.min.js',
    './src/compressed/app.js',
    './src/compressed/geospatial.js',
    './src/compressed/keymetrics.js',
    './src/compressed/dataview.js'])
    .pipe(concat('all.min.js'))
    .pipe(gulp.dest('./dist/js'));
});