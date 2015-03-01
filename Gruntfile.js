module.exports = function(grunt) {
  "use strict";

  grunt.initConfig({
	compass: {
	  dist: {
        options: {
          config: 'config.rb'
        }
      }
    },
    webfont: {
      icons: {
        src: 'fontcustom/vectors/*.svg',
        dest: 'static/font',
        destCss: 'static/css',
        options: {
          htmlDemo: false,
          hashes: false,
          font: 'font-custom',
          types: 'eot,woff,svg,ttf',
          syntax: 'bem',
          templateOptions: {
            baseClass: 'fa',
            classPrefix: 'fa-'
          }
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-webfont');

  grunt.registerTask( "default", ["compass", "webfont"] );
};

