define("Filters", function() {
	"use strict";

	var Filters = {};

	Filters.GLOW_FILTER = 0;
	Filters.DROP_SHADOW_FILTER = 1;

	Filters.names = [
		"glow",
		"shadow"
	];

	Filters.getName = function(id) {
		return Filters.names[id];
	};

	return Filters;
});
