var gulp   = require('gulp'),
    Server = require('../');

gulp.task('dev', function () {
  Server.task({
    notify: ['./server.js'],
    restart: ['./server.js'],
    server: {
      script: { path: 'server.js' },
      verbose: true
    }
  })
});