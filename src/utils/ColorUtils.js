define("ColorUtils", ["./ColorNames"], function(ColorNames) {
	"use strict";

	var ColorUtils = {};

	ColorUtils.styleColor = function(color) {
		if (this.isWebColor(color)) {
			return color;
		}
		return "#"+color;
	};

	ColorUtils.isHexColor = function(color) {

	};

	ColorUtils.isWebColor = function(color) {
		for (var i = 0; i < ColorNames.webColors.length; i++) {
			if (color === ColorNames.webColors[i]) {
				return true;
			}
		}
		return false;
	};

	return ColorUtils;
});