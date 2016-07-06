define(function() {
	"use strict";

	var FilterBase = function(id) {
		this._id = id;
	};

	FilterBase.prototype.getId = function() {
		return this._id;
	};

	FilterBase.prototype.getFilterString = function() {
		return "";
	};

	FilterBase.prototype.config = function(conf) {
		console.log("config " + conf);
	};

	return FilterBase;
});
