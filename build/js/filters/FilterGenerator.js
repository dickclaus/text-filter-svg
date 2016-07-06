define(function() {
	"use strict";

	var FilterGenerator = function() {
		this.filtersHash = {};
	};

	FilterGenerator.prototype.generate = function() {
		var filters = [];
		for (var filterID in this.filtersHash) {
			var result = {};
			var filter = this.filtersHash[filterID];
			result.filterName = filter.name;
			result.filterString = filter.getFilterString();
			filters.push(result);
		}
		return filters;
	};

	FilterGenerator.prototype.addFilter = function(filter) {
		if (!this.filtersHash[filter.getId()]) {
			this.filtersHash[filter.getId()] = filter;
		}
	};

	FilterGenerator.prototype.removeFilter = function(filter) {
		if (this.filtersHash[filter.getId()]) {
			delete this.filtersHash[filter.getId()];
		}
	};

	return FilterGenerator;
});