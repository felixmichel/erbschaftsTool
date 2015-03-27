module.exports = function(grunt) {

  grunt.config('uglify', {
      develop: {
          options: {
              compress: false,
              mangle: false,
              beautify: true
          },
          files: {
              'generated/js/script.js': ['app/js/*.js'],
              'generated/js/vendor.js': ['bower_components/jquery/dist/jquery.js']
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
              'dist/js/script.js': ['app/js/*.js'],
              'dist/js/vendor.js': ['bower_components/jquery/dist/jquery.js']
          }
      }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');

};