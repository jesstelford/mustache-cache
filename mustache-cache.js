var fs = require('fs'),
    path = require('path'),
    mustache = require('mustache');

module.exports = function(inFileName, outFileName) {
  fs.readFile(inFileName, function (error, inFile) {
    if (error) {
      throw error;
    }
    var tokens = mustache.parse(inFile.toString()),
        cachedTemplate = [
          'var mustache = require("mustache");',
          'var writer = new mustache.Writer(),',
          '    tokens = ' + JSON.stringify(tokens) + ';',
          'module.exports = function(view) {',
          '  return writer.renderTokens(tokens, new mustache.Context(view));',
          '}'
        ].join('\n');

    if (outFileName) {

      if (!isAbsolute(outFileName)) {
        outFilename = path.resolve(process.cwd(), outFileName);
      }

      fs.writeFile(outFilename, cachedTemplate, function(error) {
        if(error) {
          throw error;
        }
      });

    } else {
      console.log(cachedTemplate);
    }

  });
}

function isAbsolute(thePath) {
  return path.resolve(thePath) === path.normalize(thePath).replace( RegExp(path.sep+'$'), '' );
}
