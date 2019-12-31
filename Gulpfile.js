const { src, dest, parallel, watch } = require('gulp');
const sass = require('gulp-sass');
const minifyCSS = require('gulp-csso');
const concat = require('gulp-concat');
const htmlmin = require('gulp-htmlmin');
const connect = require('gulp-connect');

sass.compiler = require('node-sass');
const root = 'dist';

function html() {
  return src('src/**.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(dest(root))
    .pipe(connect.reload());
}

function css() {
  return src('src/**.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(minifyCSS())
    .pipe(dest(root))
    .pipe(connect.reload());
}

function js() {
  return src('src/**.js', { sourcemaps: true })
    .pipe(concat('index.min.js'))
    .pipe(dest(root, { sourcemaps: true }))
    .pipe(connect.reload());
}

function server() {
  connect.server({
    root,
    livereload: true,
  });
}

function watchFiles() {
  watch(['src/**.html'], function(cb) {
    html();
    cb();
  });
  watch(['src/**.scss'], function(cb) {
    css();
    cb();
  });
  watch(['src/**.js'], function(cb) {
    js();
    cb();
  });
}

exports.js = js;
exports.css = css;
exports.html = html;
exports.default = parallel(html, css, js, server, watchFiles);