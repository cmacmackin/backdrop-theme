module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {
      options: {
          includePaths: ['bower_components/foundation/scss',
			 'bower_components/fontawesome/scss/']
      },
      dist: {
        options: {
          outputStyle: 'compressed',
          sourceMap: true,
        },
        files: {
          'css/app.css': 'scss/app.scss'
        }
      }
    },

    copy: {
      font_awesome: {
          expand: true,
          flatten: true,
          src: ['bower_components/fontawesome/fonts/*'],
          dest: 'fonts'
        }
    },

      watch: {
      grunt: {
        options: {
          reload: true
        },
        files: ['Gruntfile.js']
      },

      sass: {
        files: 'scss/**/*.scss',
        tasks: ['sass']
      }
    }
  });

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');
    
  grunt.registerTask('build', ['copy','sass']);
  grunt.registerTask('default', ['build','watch']);
}
