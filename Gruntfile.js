module.exports = function(grunt) {
  grunt.initConfig({
 	pkg: grunt.file.readJSON('package.json'), // the package file to use

    	qunit: {
      		all: ['tests/*.html']
    	},
	 watch: {
    		files: ['tests/*.js', 'tests/*.html', 'src/*.js'],
    		tasks: ['qunit']
  	}
  });
  // load up your plugins
  grunt.loadNpmTasks('grunt-contrib-qunit');
  // register one or more task lists (you should ALWAYS have a "default" task list)
  grunt.registerTask('default', ['qunit']);
  grunt.registerTask('taskName', ['taskToRun', 'anotherTask']);
  grunt.loadNpmTasks('grunt-contrib-watch');
};
