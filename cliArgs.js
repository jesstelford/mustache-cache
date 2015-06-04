var packageJson = require('./package.json');
var commander = require('commander');

module.exports = function() {

  commander
    .version(packageJson.version)
    .usage('<template> [options]')
    .description(packageJson.description)
    .option('-o, --outfile <file>', 'Write cached template to this file. If unspecified, prints to stdout')
    .parse(process.argv);

  // template name is required
  if (commander.args.length !== 1) {
    commander.help();
  }

  return commander;

}
