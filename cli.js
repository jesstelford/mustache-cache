#!/usr/bin/env node

var cliArgs = require('./cliArgs');
var mustacheCache = require('./mustache-cache');

var options = cliArgs();

mustacheCache(options.args[0], options.outfile);
