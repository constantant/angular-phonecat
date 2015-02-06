module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		concat: {
			dist: {
				src: [
					'app/bower_components/angular/angular.js',
					'app/bower_components/angular-route/angular-route.js',
					'app/bower_components/ngstorage/ngStorage.js',
					'app/js/*.js'
				],
				dest: 'app/js/build/production.js'
			}
		},
		uglify: {
			build: {
				src: 'app/js/build/production.js',
				dest: 'app/js/build/production.min.js'
			}
		}

	});

	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	grunt.registerTask('default', ['concat', 'uglify']);

};