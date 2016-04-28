module.exports = function(grunt) {

  grunt.config('compass', {
      develop: {
          options: {
              sassDir: 'app/static/sass',
              cssDir: 'generated/css'
          }
      },
      dist: {
          options: {
              sassDir: 'app/static/sass',
              cssDir: 'dist/css',
              outputStyle: 'compressed'
          }
      }
  });

  grunt.loadNpmTasks('grunt-contrib-compass');

};