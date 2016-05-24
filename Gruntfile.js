module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
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
		}
	});

	grunt.loadNpmTasks('grunt-mocha');
	grunt.loadNpmTasks('grunt-contrib-requirejs');
	grunt.loadNpmTasks('grunt-contrib-handlebars');

	grunt.registerTask('test', 'Run Mocha tests.', function() {
		// If not --test option is specified, run all tests.
		var test_case = grunt.option('test') || '**/*';

		grunt.config.set('mocha.browser', ['test/' + test_case + '.html']);
		grunt.task.run('mocha');
	});

	grunt.registerTask('dist', ['requirejs']);

};