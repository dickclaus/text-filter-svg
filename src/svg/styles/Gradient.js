define("Gradient", ["../../utils/ClassUtils"], function(ClassUtils) {
	"use strict";

	function Gradient() {
		ClassUtils.bindAll(this);
	}

	Gradient.prototype.getGradientString = function() {
		// to override in ancestors
	};

	return Gradient;
});