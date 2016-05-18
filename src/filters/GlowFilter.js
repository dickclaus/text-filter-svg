define("GlowFilter", ["../utils/ClassUtils", "./FilterBase", "./Filters", "../template/filters/glow.hbs"], function(ClassUtils, FilterBase, Filters, template) {
	"use strict";

	var GlowFilter = function() {
		FilterBase.call(this, Filters.GLOW_FILTER);
		this.name = Filters.getName(Filters.GLOW_FILTER);
		this.offsetX = "-30%";
		this.offsetY = "-30%";
		this.sizeX = "160%";
		this.sizeY = "160%";
		this.blurX = 10;
		this.blurY = 10;
		this.color = "00cc99";
	};

	ClassUtils.inherit(GlowFilter, FilterBase);

	GlowFilter.prototype.getFilterString = function() {
		var data = {
			name: this.name,
			offsetX: this.offsetX,
			offsetY: this.offsetY,
			sizeX: this.sizeX,
			sizeY: this.sizeY,
			blurX: this.blurX,
			blurY: this.blurY
		};
		return template(data);
	};

	return GlowFilter;
});