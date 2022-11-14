const { src, dest, series, watch } = require('gulp')
const dartSass = require('sass');
const gulpSass = require('gulp-sass');
const csso = require('gulp-csso')
const include = require('gulp-file-include')
const htmlmin = require('gulp-htmlmin')
const del = require('del')
const concat = require('gulp-concat')
const autoprefixer = require('gulp-autoprefixer')
const minify = require('gulp-minify');
const sync = require('browser-sync').create()
const sass = gulpSass(dartSass)

function html(){
  return src('src/**.html')
    .pipe(include({
      prefix: '@@'
    }))
    .pipe(htmlmin({
      collapseWhitespace: true
    }))
    .pipe(dest('dist'))
}

function js(){
  return src('src/**.js')
    .pipe(minify({
      noSource: true
    }))
    .pipe(dest('dist/js'))
}

function scss(){
  return src('src/scss/**.scss')
    .pipe(sass())
    .pipe(autoprefixer({
      cascade: false
    }))
    .pipe(csso())
    .pipe(concat('index.css'))
    .pipe(dest('dist/css'))
}

function clear(){
  return del('dist')
}

function serve(){
  sync.init({
    server: './dist'
  })

  watch('src/**.html', series(html)).on('change', sync.reload)
  watch('src/scss/**.scss', series(scss)).on('change', sync.reload)
  watch('src/**.js', series(js)).on('chenge', sync.reload)
}

exports.build = series(clear, html, scss, js)
exports.serve = series(clear, html, scss, js, serve)
exports.clear = clear
