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
	.command('add <class>')
	.description('-- generate boilerplate for MVC components --')
	.action( function() {
		// implement	
	})
	.option('-m, --model', 'only generate boilerplate for model')
	.option('-v, --view', 'only generate boilerplate for view')
	.option('-c, --controller', 'only generate boilerplate for controller');

program.parse(process.argv)
