module.exports = function(grunt) {
  grunt.initConfig({
 	pkg: grunt.file.readJSON('package.json'), // the package file to use
	jshint: {
		// You get to make the name
		// The paths tell JSHint which files to validate
		tests : ['src/*.js', 'tests/*.js'],
		src : ['src/*.js', 'tests/*.js']
	},
    	qunit: {
      		all: ['tests/*.html']
    	},
	 watch: {
    		files: ['tests/*.js', 'tests/*.html', 'src/*.js'],
    		tasks: ['qunit', 'sync:main' ]
  	},
	sync: {
		main: {
			files: [{
			  src: [ 'src/**' ],
			  dest: 'bin/',
			}]
		}
	}
  });

	// load up your plugins
	grunt.loadNpmTasks('grunt-contrib-qunit');
	// register one or more task lists (you should ALWAYS have a "default" task list)
	grunt.registerTask('default', ['qunit']);
	grunt.registerTask('taskName', ['taskToRun', 'anotherTask']);
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-sync');
  	grunt.registerTask('default', 'sync');
};

