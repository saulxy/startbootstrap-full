module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-wiredep');
  //grunt.loadNpmTasks('grunt-contrib-watch');

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'src/<%= pkg.name %>.js',
        dest: 'build/<%= pkg.name %>.min.js'
      }
    },
    wiredep: {
     task: {
       src: ['index.html']
     }
   }
  });

  grunt.registerTask('default', ['wiredep']);

};
