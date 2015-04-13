module.exports = function(grunt) {

  grunt.config('uglify', {
      develop: {
          options: {
              compress: false,
              mangle: false,
              beautify: true
          },
          files: {
              'generated/js/modernizr.custom.js': ['app/js/modernizr.custom.js'],
              'generated/js/toucheffects.js': ['app/js/toucheffects.js'],
              'generated/js/iframeResizer.contentWindow.min.js': ['app/js/iframeResizer.contentWindow.min.js'],
              'generated/js/jquery.js': ['bower_components/jquery/dist/jquery.js'],
              'generated/js/bootstrap.min.js': ['app/js/bootstrap.min.js'],
              'generated/js/functions.js': ['app/js/functions.js']
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
              'dist/js/modernizr.custom.js': ['app/js/modernizr.custom.js'],
              'dist/js/toucheffects.js': ['app/js/toucheffects.js'],
              'dist/js/iframeResizer.contentWindow.min.js': ['app/js/iframeResizer.contentWindow.min.js'],
              'dist/js/jquery.js': ['bower_components/jquery/dist/jquery.js'],
              'dist/js/bootstrap.min.js': ['app/js/bootstrap.min.js'],
              'dist/js/functions.js': ['app/js/functions.js']
          }
      }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');

};