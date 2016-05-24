'use strict';

suite('ColorUtilsTest', function() {
	suite('#isWebColor()', function () {
		test('should return true if color name will work on web', function () {
			assert.equal(true, ColorUtils.isWebColor('red'));
			assert.equal(true, ColorUtils.isWebColor('cadetblue'));
		});

		test('should return false if color name will work on web', function () {
			assert.equal(false, ColorUtils.isWebColor('rose'));
			assert.equal(false, ColorUtils.isWebColor('mint'));
		});
	});
});

