module.exports = function(grunt) {

    grunt.initConfig({
	    
	    copy: {
                build: {
                    cwd: 'src',
                    src: ['**'],
                    dest: 'build',
                    expand: true
                },
            }
	});

    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.registerTask('build', 'Copy files to the build directory.', ['copy']);
};