define("SVGRectangle", function() {
	"use strict";

	function SVGRectangle(x, y, width, height) {
		this.x = x || 0;
		this.y = y || 0;
		this.width = width || 0;
		this.height = height || 0;
	}

	SVGRectangle.prototype.getX = function() {
		return this.x;
	};

	SVGRectangle.prototype.getY = function() {
		return this.y;
	};

	SVGRectangle.prototype.getWidth = function() {
		return this.width;
	};

	SVGRectangle.prototype.getHeight = function() {
		return this.height;
	};


	return SVGRectangle;
});