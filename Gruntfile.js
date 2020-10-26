module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);
  grunt.initConfig({
    paths: {
      resources: 'src',
      public: 'public'
    },
    sass: {
      dev: {
        options: {
          style: 'compressed'
        },
        files: {
          '<%= paths.public %>/main.min.css' : '<%= paths.resources %>/scss/main.scss'
        }
      },
      prod: {
        options: {
          style: 'compressed',
          sourcemap: 'none'
        },
        files: {
          '<%= paths.public %>/main.min.css' : '<%= paths.resources %>/scss/main.scss'
        }
      }
    },
    clean: {
      sass: [
          '<%= paths.public %>/main.min.css',
          '<%= paths.public %>/main.min.css.map'
      ]
    },
    watch: {
      sass: {
        files: [
          '<%= paths.resources %>/scss/*.scss',
          '<%= paths.resources %>/scss/*/*.scss'
        ],
        tasks: ['sass:dev']
      }
    }
  });
  grunt.registerTask('default', [
      'clean',
      'sass:dev'
  ]);
  grunt.registerTask('prod', [
      'clean',
      'sass:prod'
  ]);
};