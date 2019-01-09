module.exports = function (grunt) {

  grunt.initConfig({
    concat: {
      css: {
        files: {
          'dist/css/styles.css': [
            'assets/css/mycss.css',
            'assets/css/myHover.css',
            'assets/css/animate.min.css'
          ],
        },
      },
      js: {
        files: {
          'dist/js/scripts.js': [
            'assets/js/jquery.viewport.mini.js',
            'assets/js/mixpanelInit.js',
            'assets/js/myScripts.js'
          ],
        },
      },
    },
    cssmin: {
      dist: {
        files: {
          'dist/css/styles.min.css': ['dist/css/styles.css']
        }
      }
    },
    uglify: {
      dist: {
        files: {
          'dist/js/scripts.min.js': ['dist/js/scripts.js']
        }
      }
    },
    imagemin: {
      dynamic: {
        files: [{
          expand: true,
          cwd: 'assets/img/',
          src: ['**/*.{png,jpg,gif,jpeg}'],
          dest: 'dist/img'
        }]
      }
    },
    uncss: {
      dist: {
        files: {
          'dist/css/tidy.css': ['index.html']
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-uncss');

  grunt.registerTask('default', ['concat', 'cssmin', 'uglify', 'imagemin', 'uncss']);

};
