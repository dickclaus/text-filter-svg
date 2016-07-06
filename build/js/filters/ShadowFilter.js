define(["../utils/ClassUtils", "./FilterBase", "./Filters", "hbars!../template/filters/shadow"], function(ClassUtils, FilterBase, Filters, template) {
	"use strict";

	var ShadowFilter = function() {
		FilterBase.call(this, Filters.SHADOW_FILTER);
		this.name = Filters.getName(Filters.SHADOW_FILTER);
		this.offsetX = "-20%";
		this.offsetY = "-20%";
		this.sizeX = "140%";
		this.sizeY = "140%";
		this.blurX = 3;
		this.blurY = 3;
		this.shadowOffsetX = 6;
		this.shadowOffsetY = 6;
		this.color = "000000";
	};

	ClassUtils.inherit(ShadowFilter, FilterBase);

	ShadowFilter.prototype.setBlur = function(blurX, blurY) {
		this.blurX = blurX || 0;
		this.blurY = blurY || 0;
	};

	ShadowFilter.prototype.setFilterSize = function(sizeX, sizeY) {
		var sizeX = sizeX || 0;
		var sizeY = sizeY || 0;
		this.sizeX = sizeX + "%";
		this.sizeY = sizeY + "%";
	};

	ShadowFilter.prototype.setFilterOffset = function(offsetX, offsetY) {
		var offsetX = offsetX || 0;
		var offsetY = offsetY || 0;
		this.offsetX = offsetX + "%";
		this.offsetY = offsetY + "%";
	};

	ShadowFilter.prototype.setShadowOffset = function(offsetX, offsetY) {
		this.shadowOffsetX = offsetX || 0;
		this.shadowOffsetY = offsetY || 0;
	};

	ShadowFilter.prototype.setColor = function(color) {
		this.color = color.toString(16);
	};

	ShadowFilter.prototype.getFilterString = function() {
		var data = {
			name: this.name,
			offsetX: this.offsetX,
			offsetY: this.offsetY,
			sizeX: this.sizeX,
			sizeY: this.sizeY,
			blurX: this.blurX,
			blurY: this.blurY,
			shadowOffsetX: this.shadowOffsetX,
			shadowOffsetY: this.shadowOffsetY
		};
		return template(data);
	};

	return ShadowFilter;
});