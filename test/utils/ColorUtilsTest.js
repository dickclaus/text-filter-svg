'use strict';
var requirejs = require('requirejs');
var assert = require('chai').assert;
requirejs.config({
	baseUrl: 'src',
	nodeRequire: require
});

describe('ColorUtilsTest', function() {
	var ColorUtils;
	before(function(done) {
		requirejs(['./utils/ColorUtils'], function(colorUtils) {
			ColorUtils = colorUtils;
			done();
		});
	});

	describe('#isWebColor()', function () {
		it('should return true if color name will work on web', function () {
			assert.equal(true, ColorUtils.isWebColor('red'));
			assert.equal(true, ColorUtils.isWebColor('cadetblue'));
		});

		it('should return false if color name will work on web', function () {
			assert.equal(false, ColorUtils.isWebColor('rose'));
			assert.equal(false, ColorUtils.isWebColor('mint'));
		});
	});
});

