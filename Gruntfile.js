module.exports = function(grunt) {

	// 1. Вся настройка находится здесь
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

	// 3. Тут мы указываем Grunt, что хотим использовать этот плагин
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	// 4. Указываем, какие задачи выполняются, когда мы вводим «grunt» в терминале
	grunt.registerTask('default', ['concat', 'uglify']);

};