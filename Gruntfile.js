'use strict';

module.exports = function(grunt) {

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.initConfig({
    jshint: {
      options: {
        jshintrc: true
      },
      all: ['Gruntfile.js', 'server.js','app/js/**/*.js']
    },
    // clean: ['client'],
    // copy: {
    //   all: {
    //     expand: true,
    //     cwd: './app',
    //     src: ['views/*.html', './*.html', '!Gruntfile.js'],
    //     dest: 'client/',
    //     flatten: false,
    //     filter: 'isFile'
    //   },
    //   design: {
    //     expand: true,
    //     cwd: './design',
    //     src: ['sass/**/*', 'stylesheets/*.css', 'images/**/*', 'user_home.js'],
    //     dest: 'client/',
    //     flatten: false,
    //     filter: 'isFile'
    //   }
    // },
    // browserify: {
    //   all: {
    //     src: 'app/js/**/*.js',
    //     dest: 'client/client.js'
    //   },
    //   options: {
    //     transform: ['debowerify'],
    //     debug: true
    //   }
    // },
    express: {
      dev: {
        options: {
          background: true,
          script: 'server.js'
        }
      },
      prod: {
        options: {
          script: 'server.js',
          node_env: 'production'
        }
      },
      test: {
        options: {
          script: 'server.js'
        }
      }
    }
  });

  grunt.registerTask('serve', [ 'express:dev' ]);

};
