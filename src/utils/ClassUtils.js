define("ClassUtils", function() {
	var ClassUtils = {};

	ClassUtils.inherit = function(child, parent) {
		function EmptyConstructor() {}
		EmptyConstructor.prototype = parent.prototype;
		child.prototype = new EmptyConstructor();
	};

	ClassUtils.bindAll = function(context) {
		if (context.__boundAll) {
			throw new Error("Context is allready bound");
		}
		context.__boundAll = true;
		for (var i in context) {
			if (typeof context[i] === "function") {
				context[i] = context[i].bind(context);
			}
		}
	};

	return ClassUtils;
});