define("ColorUtils", ["./ColorNames"], function(ColorNames) {
	"use strict";

	function ColorUtils() {

	};

	ColorUtils.prototype.styleColor = function(color) {
		if (this.isWebColor(color)) {
			return color;
		}
		return "#"+color;
	};

	ColorUtils.prototype.isHexColor = function(color) {

	};

	ColorUtils.prototype.isWebColor = function(color) {
		for (var i = 0; i < ColorNames.webColors.length; i++) {
			if (color === ColorNames.webColors[i]) {
				return true;
			}
		}
		return false;
	};

	return ColorUtils;
});