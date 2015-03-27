module.exports = function(grunt) {

  grunt.config('watch', {
      scss: {
          files: ['app/static/sass/**/*.scss'],
          tasks: ['compass:develop'],
          options: {
              livereload: true,
          }
      },
      js: {
          files: ['app/**/*.js'],
          tasks: ['uglify:develop']
      }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');

};