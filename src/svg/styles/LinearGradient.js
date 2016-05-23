define("LinearGradient", ["../../utils/ClassUtils", "./Gradient", "../../template/styles/gradient.hbs"], function(ClassUtils, Gradient, template) {
	"use strict";

	function LinearGradient(id, rect) {
		this.id = id;
		this.gradientRect = rect;
		this.stops = [];
	}

	ClassUtils.inherit(LinearGradient, Gradient);

	LinearGradient.prototype.getGradientString = function() {
		var data = {
			gradientId: this.id,
			gradientRect: this.gradientRect,
			gradientStops: this.stops
		};
		return template(data);
	};

	LinearGradient.prototype.addGradientStop = function(offset, stopColor, stopOpacity) {
		var stop = {
			offsetPercent: offset || 0,
			stopColor: stopColor || "#fff",
			stopOpacity: stopOpacity || 0
		};
		this.stops.push(stop);
	};

	return LinearGradient;
});