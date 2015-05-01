module.exports = function(grunt) {

  grunt.config('uglify', {
      develop: {
          options: {
              compress: false,
              mangle: false,
              beautify: true
          },
          files: {
              'generated/js/jquery.js': ['bower_components/jquery/dist/jquery.js'],
              'generated/js/bootstrap.min.js': ['app/js/bootstrap.min.js'],
              'generated/js/functions.js': ['app/js/functions.js'],
              'generated/js/jshashtable-2.1.js': ['app/js/jshashtable-2.1.js'],
              'generated/js/jquery.numberformatter-1.2.3.min.js': ['app/js/jquery.numberformatter-1.2.3.min.js']
          }
      },
      dist: {
          options: {
              compress: true,
              compress: {
                  warnings: false
              },
              mangle: true
          },
          files: {
              'dist/js/jquery.js': ['bower_components/jquery/dist/jquery.js'],
              'dist/js/bootstrap.min.js': ['app/js/bootstrap.min.js'],
              'dist/js/functions.js': ['app/js/functions.js'],
              'dist/js/jshashtable-2.1.js': ['app/js/jshashtable-2.1.js'],
              'dist/js/jquery.numberformatter-1.2.3.min.js': ['app/js/jquery.numberformatter-1.2.3.min.js']
          }
      }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');

};