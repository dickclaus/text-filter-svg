define("StyleGenerator", function() {
	var StyleGenerator = function() {
		this.fontSize = 18;
		this.fontFamily = "sans-serif";
		this.textAnchor = "middle";
		this.fill = "FFFFFF";
		this.currentIndex = 0;
		this.styles = [];
	};

	StyleGenerator.prototype.generate = function() {
		// TODO: Add generating styles for different filters
		var baseClass = this._createClass();
		baseClass.classStyles = this._generateBaseStyles();
		this.styles.push(baseClass);
		return this.styles;
	};

	StyleGenerator.prototype.setFontSize = function(fontSize) {
		this.fontSize = fontSize;
	};

	StyleGenerator.prototype.setFontFamily = function(fontFamily) {
		this.fontFamily = fontFamily;
	};

	StyleGenerator.prototype.setTextAnchor = function(textAnchor) {
		this.textAnchor = textAnchor;
	};

	StyleGenerator.prototype.setFillColor = function(fillColor) {
		this.fill = fillColor;
	};

	StyleGenerator.prototype._createClass = function() {
		this.currentIndex++;
		return {
			className: "cls-" + this.currentIndex
		}
	};

	StyleGenerator.prototype.getBaseClass = function() {
		return this.styles[0].className;
	};

	StyleGenerator.prototype._generateBaseStyles = function() {
		var styles = "";

		styles += this.createStyleRule("font-family", this.fontFamily);
		styles += this.createStyleRule("font-size", this.fontSize + "px");
		styles += this.createStyleRule("text-anchor", this.textAnchor);
		styles += this.createStyleRule("fill", "#" + this.fill);
		return styles;
	};

	StyleGenerator.prototype.createStyleRule = function(rule, value) {
		return rule + ": " + value + ";\n";
	};

	return StyleGenerator;
});
