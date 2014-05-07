module.exports = function(grunt) {

    // 1. All configuration goes here 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

         

        concat: {
            // 2. Configuration for concatinating files goes here.
            js: {
            src: [
                'src/js/*.js', // All JS in the libs folder
                 ],
            dest: 'assets/js/production.js',
            },
            css: {
            src: [
                'src/css/main.css',
                'src/js/styles/obsidian.css', // All css in the libs folder
                 ],
            dest: 'src/css/production.css',
            }
        },

        autoprefixer: {
            options: {
            browsers: ['> 1%', 'last 2 versions', 'Firefox ESR', 'Opera 12.1', 'ie 8', 'ie 9', 'ie 10']
            },
            dist: {
                src: [
                'src/css/production.css',
                 ],
            dest: 'assets/css/production.css',
            }
            },

        uglify: {
            build: {
            src: [
            'assets/js/production.js',
            ],
            dest: 'assets/js/production.min.js'
            }
        },
            cssmin : {
            css:{
                src: 'assets/css/production.css',
                dest: 'assets/css/production.min.css'
            }
        },

   

    });

    // 3. Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-autoprefixer');


    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['concat', 'autoprefixer','uglify', 'cssmin']);

};
