'use strict';

module.exports = function(grunt) {

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),
    clean: ['dist'],
    copy: {
        all: {
            expand: true,
            cwd: 'app/',
            src: ['*.css', '*.html', '!Gruntfile.js'],
            dest: 'dist/',
            flatten: true,
            filter: 'isFile'
        }
    },
    browserify: {
        standalone: {
            src: 'app/*.js',
            dest: 'dist/app.js'
        },
        options: {
            debug: true
        }
    },
    watch: {
        options: {
            livereload: true
        },
        html: {
            files: ['app/*.html', 'app/*.css'],
            tasks: ['copy']
        },
        js: {
            files: '<%= browserify.standalone.src %>',
            tasks: ['jshint', 'browserify:standalone']
        }
    },
    jshint: {
      options: {
        jshintrc: true
      },
      all: ['Gruntfile.js', 'server.js', 'app/*.js']
    },
    express: {
        dev: {
            options: {
                background: true,
                script: 'server.js'
            }
        },
    },
  });

  grunt.registerTask('serve', ['express:dev', 'build', 'watch']);
  grunt.registerTask('test', ['jshint']);
  grunt.registerTask('build', ['clean', 'browserify:standalone', 'copy']);

};
