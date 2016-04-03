var gulp = require('gulp');
var del = require('del');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var jshint = require('gulp-jshint');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');

//1)sass to css with auto prefixer
gulp.task('sass', function() {
    return gulp.src('./app/assets/sass/*.scss')
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['last 2 versions']
        }))
        .pipe(gulp.dest('./app/assets/styles/'));
});


//2)minify images in src and save it build folder
gulp.task('imagemin', () => {
    return gulp.src('./app/assets/images/src/**/*')
        .pipe(imagemin({
            progressive: true,
        }))
        .pipe(gulp.dest('./app/assets/images/build'));
});

//3)clean all the minify images in build
gulp.task('clean', function() {
    return del(['./app/assets/images/bulid']);
});

//4)lint error and warning in javascript code
gulp.task('jshint', function() {
  return gulp.src('./app/scripts/*/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});



//5) watch and monitor image and sass files
gulp.task('watch', function() {
  gulp.watch('./app/assets/images/src/**/*', ['imagemin']);
  gulp.watch('./app/assets/sass/*.scss', ['sass']);
});


