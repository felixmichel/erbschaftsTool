module.exports = function(grunt) {

  grunt.config('copy', {
      develop: {
          files: [
              {expand: true, cwd: 'app', src: '*.html', dest: 'generated/', filter: 'isFile'},
              {expand: true, cwd: 'app/img', src: '**/*', dest: 'generated/img/', filter: 'isFile'}

          ]
      },
      dist: {
          files: [
              {expand: true, cwd: 'app', src: '*.html', dest: 'dist/', filter: 'isFile'},
              {expand: true, cwd: 'app/img', src: '**/*', dest: 'dist/img/', filter: 'isFile'}
          ]
      }
  });

  grunt.loadNpmTasks('grunt-contrib-copy');

};