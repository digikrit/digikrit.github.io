module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {
            options: {
                separator: "\n\n"
            },
            dist: {
                src: ['bower_components/bootstrap/dist/js/bootstrap.js',
                      'bower_components/owl-carousel/owl-carousel/owl.carousel.js',
                      'bower_components/magnific-popup/dist/jquery.magnific-popup.js',
                      'bower_components/gmap3/dist/gmap3.js',
                      'bower_components/strftime/strftime.js',
                      'js/main.js', 'js/repos.js'],
                dest: 'js/all.js'
            }
        },

        uglify: {
            main: {
                files: {
                    'js/all.min.js' : ['js/all.js']
                }
            }
        },

        sass: {
            dist: {
                options: {
                    outputStyle: 'compressed'
                },
                files: {
                    'css/main-unprefixed.css' : '_scss/main.scss'
                }
            }
        },

        autoprefixer: {
            main: {
                src: "css/main-unprefixed.css",
                dest: "css/main.css"
            }
        },

        shell : {
            jekyllServe : {
                command : 'jekyll serve'
            },

            jekyllBuild : {
                command : 'jekyll build'
            }
        }
    });

    require("load-grunt-tasks")(grunt);

    // Define the tasks
    grunt.registerTask('serve', ['shell:jekyllServe']);
    grunt.registerTask('default', ['concat', 'uglify', 'sass', 'autoprefixer', 'shell:jekyllBuild']);
}