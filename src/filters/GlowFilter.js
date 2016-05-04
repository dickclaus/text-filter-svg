"use strict";

define("GlowFilter", ["../utils/ClassUtils", "./FilterBase", "./Filters"], function(FilterBase, ClassUtils, Filters) {

	var GlowFilter = function() {
		FilterBase.call(this, Filters.GLOW_FILTER);
	};

	ClassUtils.inherit(GlowFilter, FilterBase);

	return GlowFilter;
});