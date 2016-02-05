'use strict';

var normalize = require('./lib/normalize.css');
var base = require('./lib/base.css');
var grid = require('./lib/grid.css');
var typography = require('./lib/typography.css');
var links = require('./lib/links.css');
var buttons = require('./lib/buttons.css');
var forms = require('./lib/forms.css');
var lists = require('./lib/lists.css');
var code = require('./lib/code.css');
var tables = require('./lib/tables.css');
var spacing = require('./lib/spacing.css');
var utilities = require('./lib/utilities.css');

module.exports = {
	normalize: normalize,
	base: base,
	grid: grid,
	typography: typography,
	links: links,
	buttons: buttons,
	forms: forms,
	lists: lists,
	code: code,
	tables: tables,
	spacing: spacing,
	utilities: utilities
};
