#!/usr/bin/env node

/**
 * Module dependencies.
 */

var program = require('commander')
  , mkdirp = require('mkdirp')
  , pkg = require('../package.json')
  , version = pkg.version
  , os = require('os')
  , fs = require('fs');

  // CLI

 program
	.version('0.0.1');

program
	.command('new')
	.description('-- generate a new express app in the current directory --')
	.action( function() {
		// implement
    });

program
    .command('add')
	.description('-- generate boilerplate for MVC components --')
	.action( function() {
		// implement	
	})
	.option('-m, --model <string>', 'name of the class for which to generate model boilerplate')
	.option('-v, --view <string>', 'name of the class for which to generate view boilerplate')
	.option('-c, --controller <string>', 'name of the class for which to generate controller boilerplate');

program.parse(process.argv)
