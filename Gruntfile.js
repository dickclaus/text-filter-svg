module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		connect: {
			server: {
				options: {
					port: 3000,
					keepalive: true
				}
			}
		},
		mocha: {
			// Test all files ending in .html anywhere inside the test directory.
			browser: ['test/**/*.html'],
			options: {
				reporter: 'Nyan', // Duh!
				run: true
			}
		},
		handlebars: {
			compile: {
				amd: true,
				files: {
					'src/template/templates.js': 'src/template/**/*.hbs'
				}
			}
		},
		clean: {
			build: ['build/js/*', '!build/js/app.js'],
			dist: ['dist']
		},
		copy: {
			main: {
				expand: true,
				cwd: 'src',
				src: '**',
				dest: 'build/js'
			},
			libs: {
				files: [
					{ expand:true, src: ['node_modules/handlebars/dist/handlebars.js'], dest:'build/js/libs/', flatten: true },
					{ expand:true, src: ['node_modules/handlebars/dist/handlebars.runtime.js'], dest:'build/js/libs/', flatten: true },
					{ expand:true, src: ['node_modules/requirejs/require.js'], dest:'build/js/libs/', flatten: true },
					{ expand:true, src: ['libs/hbars.js'], dest:'build/js/libs/', flatten: true },
					{ expand:true, src: ['libs/text.js'], dest:'build/js/libs/', flatten: true }
				]
			}
		},
		requirejs: {
			compile: {
				options: {
					// Assume your scripts are in a subdirectory under this path.
					appDir: 'src',

					// By default, all modules are located relative to this path.
					baseUrl: '.',

					// Location of the runtime config be read for the build.
					mainConfigFile: 'src/build.js',

					//The directory path to save the output.
					dir: 'dist',

					// If you do not want uglifyjs optimization.
					optimize: 'uglify',

					// Inlines any text! dependencies, to avoid separate requests.
					inlineText: true,

					// Modules to stub out in the optimized file.
					stubModules: ['text', 'hbars'],

					// Files combined into a build layer will be removed from the output folder.
					removeCombined: true,
					writeBuildTxt: false,

					// This option will turn off the auto-preservation.
					preserveLicenseComments: false,

					//List the modules that will be optimized.
					modules: [
						{
							name: "main" // main config file
						}
					]
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-mocha');
	grunt.loadNpmTasks("grunt-contrib-connect");
	grunt.loadNpmTasks('grunt-contrib-requirejs');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-clean');

	grunt.registerTask('start', 'Run local server', function() {
		grunt.task.run('connect');
	});

	grunt.registerTask('build', 'Build files for test', function() {
		grunt.task.run('clean:build');
		grunt.task.run('copy:libs');
		grunt.task.run('copy:main');
	});

	grunt.registerTask('test', 'Run Mocha tests.', function() {
		// If not --test option is specified, run all tests.
		var test_case = grunt.option('test') || '**/*';

		grunt.config.set('mocha.browser', ['test/' + test_case + '.html']);
		grunt.task.run('mocha');
	});

};