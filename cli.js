#!/usr/bin/env node
'use strict';
var meow = require('meow');
const updateNotifier = require('update-notifier');
var coloredPencils = require('./');

var cli = meow([
	'Usage',
	'  $ colored-pencils [input]',
	'',
	'Options',
	'  --foo  Lorem ipsum. [Default: false]',
	'',
	'Examples',
	'  $ colored-pencils',
	'  shits & giggles'
]);

updateNotifier({pkg: cli.pkg}).notify();

console.log(coloredPencils(cli.input[0] || 'unicorns'));
