const gulp = require('gulp')
const clean = require('gulp-clean')
const uglify = require('gulp-uglify')
const usemin = require('gulp-usemin')
const cssmin = require('gulp-cssmin')
const autoprefixer = require('gulp-autoprefixer')
const htmlmin = require('gulp-htmlmin')
const browserSync = require('browser-sync').create()
const jshintStylish = require('jshint-stylish')
const jshint = require('gulp-jshint')
const csslint = require('gulp-csslint')

gulp.task('default', ['copy'], () => gulp.start('usemin'))

gulp.task('copy', ['clean'], () => gulp.src('src/**')
    .pipe(gulp.dest('dist')))

gulp.task('clean', ()  => gulp.src('dist')
    .pipe(clean()))

gulp.task('usemin', () => gulp.src('dist/**/**/*.html')
    .pipe(usemin({
        css: [autoprefixer, cssmin],
        html: [ () => htmlmin({ collapseWhitespace: true }) ],
        js: [uglify],
        inlinejs: [uglify]
    }))
    .pipe(gulp.dest('dist')))


gulp.task('server', function() {
    browserSync.init({
        server: {
            baseDir: 'src'
        }
    })

    gulp.watch('src/**/*').on('change', browserSync.reload);

    gulp.watch('src/js/**/*.js').on('change', function(event) {
        console.log("Linting " + event.path);
        gulp.src(event.path)
        .pipe(jshint())
        .pipe(jshint.reporter(jshintStylish));
        gulp.run('default');
    })

    gulp.watch('src/css/**/*.css').on('change', function(event) {
        console.log("Linting " + event.path);
        gulp.src(event.path)
        .pipe(csslint())
        .pipe(csslint.formatter());
        gulp.run('default');
    })
})
