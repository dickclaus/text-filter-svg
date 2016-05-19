define("StyleGenerator", function() {
	"use strict";

	var StyleGenerator = function(filterGenerator) {
		this.filterGenerator = filterGenerator;
		this.fontSize = 18;
		this.fontFamily = "sans-serif";
		this.textAnchor = "middle";
		this.fill = "FFFFFF";
		this.currentIndex = 0;
		this.styles = [];
	};

	StyleGenerator.prototype.generate = function() {
		// TODO: Add according to layers
		var baseClass = this._createClass();
		baseClass.classStyles = this._generateBaseStyles();
		this.styles.push(baseClass);

		for (var filterID in this.filterGenerator.filtersHash) {
			var filter = this.filterGenerator.filtersHash[filterID];
			var filterClass = this._createFilterClass(filter.name);
			filterClass.classStyles = this._generateFilterStyles(filter);
			this.styles.push(filterClass);
		}

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

	StyleGenerator.prototype.getTexts = function(positionX, positionY, text) {
		var texts = [];
		for (var filterID in this.filterGenerator.filtersHash) {
			var filter = this.filterGenerator.filtersHash[filterID];
			texts.push(this._createTextObject(positionX, positionY, text, filter.name + " " + this._getBaseClass()));
		}
		texts.push(this._createTextObject(positionX, positionY, text, this._getBaseClass()));
		return texts;
	};

	StyleGenerator.prototype._createTextObject = function(positionX, positionY, text, textClass) {
		var textObject = {
			positionX: positionX,
			positionY: positionY,
			text: text,
			textClass: textClass
		};
		return textObject;
	};

	StyleGenerator.prototype._createClass = function() {
		this.currentIndex++;
		return {
			className: "cls-" + this.currentIndex
		}
	};

	StyleGenerator.prototype._createFilterClass = function(name) {
		return {
			className: name
		}
	};

	StyleGenerator.prototype._getBaseClass = function() {
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

	StyleGenerator.prototype._generateFilterStyles = function(filter) {
		var styles = "";

		styles += this.createFilterRule("filter", filter.name);
		styles += this.createStyleRule("fill", "#" + filter.color);
		return styles;
	};

	StyleGenerator.prototype.createStyleRule = function(rule, value) {
		return rule + ": " + value + ";\n";
	};

	StyleGenerator.prototype.createFilterRule = function(rule, value) {
		return rule + ": url(#" + value + ");\n";
	};

	return StyleGenerator;
});
