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
          //outputStyle: 'compressed',
          sourceMap: true,
        },
        files: {
          'css/backdrop.css': 'scss/backdrop.scss'
        }
      }
    },

    copy: {
      font_awesome: {
          expand: true,
          flatten: true,
          src: ['bower_components/fontawesome/fonts/*'],
          dest: 'fonts'
      },
      js: {
          expand: true,
          flatten: true,
          src: ['bower_components/modernizr/modernizr.js',
                'bower_components/jquery/dist/jquery.min.js',
                'bower_components/jquery/dist/jquery.min.map',
                'bower_components/foundation/js/foundation.min.js'],
          dest: 'js'
      },
      tipue: {
          expand: true,
          flatten: false,
          src: ['loader.gif'],
          dest: 'pelican-theme/static/'
      },
      pelican_css: {
          expand: true,
          flatten: true,
          src: ['css/*'],
          dest: 'pelican-theme/static/css'
      },
      pelican_js: {
          expand: true,
          flatten: true,
          src: ['js/*'],
          dest: 'pelican-theme/static/js'
      },
      pelican_fonts: {
        expand: true,
        flatten: true,
        src: ['fonts/*'],
        dest: 'pelican-theme/static/fonts'
      },
      pelican_html: {
          expand: true,
          flatten: true,
          src: ['html/*'],
          dest: 'pelican-theme/templates'
      },
      pelican_theme: {
          expand: true,
          flatten: true,
          src: ['theme-files-extra/*'],
          dest: 'pelican-theme/',
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
    
  grunt.registerTask('build', ['sass','copy']);
  grunt.registerTask('default', ['build','watch']);
}
