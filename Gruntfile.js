module.exports = function(grunt) {
    "use strict";

    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        compass: {
            dist: {
                options: {
                    config: 'config.rb'
                }
            }
        },
        shell: {
            fontcustom: {
                command: 'fontcustom  compile --config=fontcustom.yml --force'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-compass');

    grunt.registerTask("default", ["compass", "shell:fontcustom"]);
};

