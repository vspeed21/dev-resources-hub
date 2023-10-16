const { src, dest, parallel } = require('gulp');

const cache = require('gulp-cache');
const imagemin = require('gulp-imagemin');
const webp = require('gulp-webp');
const avif = require('gulp-avif');

const path = {
  images: 'src/img/**/*.{jpg,png,jpeg}',
}

function imageMin(done) {

  src(path.images)
    .pipe(cache(imagemin()))
    .pipe(dest('dist/img'))

  done();
}

function imageWebpVersion(done) {
  const options = {
    quality: 80,
  };

  src(path.images)
    .pipe(webp(options))
    .pipe(dest('dist/img'))

  done();
}

function imageAvifVersion(done) {
  const options = {
    quality: 80,
  };
  src(path.images)
    .pipe(avif(options))
    .pipe(dest('dist/img'));


  done()
}

exports.build = parallel(imageMin, imageWebpVersion, imageAvifVersion);


