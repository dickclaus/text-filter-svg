define(["./FilterBase", "../utils/ClassUtils", "./Filters", "hbars!../template/filters/glow"], function(FilterBase, ClassUtils, Filters, template) {
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

	GlowFilter.prototype.setBlur = function(blurX, blurY) {
		this.blurX = blurX || 0;
		this.blurY = blurY || 0;
	};

	GlowFilter.prototype.setFilterSize = function(sizeX, sizeY) {
		var sizeX = sizeX || 0;
		var sizeY = sizeY || 0;
		this.sizeX = sizeX + "%";
		this.sizeY = sizeY + "%";
	};

	GlowFilter.prototype.setFilterOffset = function(offsetX, offsetY) {
		var offsetX = offsetX || 0;
		var offsetY = offsetY || 0;
		this.offsetX = offsetX + "%";
		this.offsetY = offsetY + "%";
	};

	GlowFilter.prototype.setColor = function(color) {
		this.color = color;
	};

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