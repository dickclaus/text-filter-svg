"use strict";
define("FilterBase", function() {
	var FilterBase = function(id) {
		this._id = id;
	};

	FilterBase.prototype.getId = function() {
		return this._id;
	};

	FilterBase.prototype.config = function(conf) {
		console.log("config " + conf);
	};

	return FilterBase;
});
