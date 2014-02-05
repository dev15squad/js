{
  "name": "projectName",
  "version": "1.0.0",
  "devDependencies": {
    "grunt": "~0.4.2",
    "grunt-contrib-qunit": "~0.4.0",
    "grunt-contrib-watch": ">=0.5.3",
    "grunt-contrib-copy": "~0.5.0",
    "grunt-contrib-jshint": "~0.8.0",
    "karma": "~0.10.9",
    "grunt-blanket-qunit": "~0.2.0"
  },
  "dependencies": {
    "grunt-sync": "0.0.5"
  }
}


module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'), // the package file to use
	qunit: {
      		all: [
		],
		personInfoValidation: [
		],
		formWorkspace: [
		]

    	}, 
	watch: {
	    files: [
		],
	    tasks: ['jshint','sync', 'qunit' ]
	},
	sync: {
		main : {
			files: [{
			expand : true,
			cwd : '../../../src/main/webapp/',
			 src: [ 
				'js/**'
			       ],
			 dest: '/WORK//target/ROOT/'
			}]
		}
        },
	jshint: {                
		tests : ['src//*.js', 'src/*.js', 'tests/*.js'],                
		src : [
		]        
	},
	blanket_qunit: {
		all: {
			options: {
				urls: [
					'src/.html?coverage=true&gruntReport'
					],
				threshold: 60
			}
		}
	}




  });
  grunt.loadNpmTasks('grunt-contrib-qunit');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-sync');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-blanket-qunit');
  grunt.registerTask('default', ['qunit', 'sync']);
};

