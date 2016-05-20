define("TextFilterSVG",["./svg/StyleGenerator", "./filters/FilterGenerator", "./template/svg.hbs"], function(StyleGenerator, FilterGenerator, template) {
	"use strict";

	var TextFilterSVG = function() {
		// TODO: introduce layers
		this.filterGenerator = new FilterGenerator();
		this.styleGenerator = new StyleGenerator(this.filterGenerator);
	};

	TextFilterSVG.prototype.config = function(conf) {

	};

	TextFilterSVG.prototype.setText = function(text) {
		this.text = text;
	};

	TextFilterSVG.prototype.setFillColor = function(color) {
		this.styleGenerator.setFillColor(color);
	};

	TextFilterSVG.prototype.setFontSize = function(fontSize) {
		this.styleGenerator.setFontSize(fontSize);
	};

	TextFilterSVG.prototype.setFontFamily = function(fontFamily) {
		this.styleGenerator.setFontFamily(fontFamily);
	};

	TextFilterSVG.prototype.setTextAnchor = function(textAnchor) {
		this.styleGenerator.setTextAnchor(textAnchor);
	};

	TextFilterSVG.prototype.setStrokeColor = function(strokeColor) {
		this.styleGenerator.setStrokeColor(strokeColor);
	};

	TextFilterSVG.prototype.setStrokeWidth = function(strokeWidth) {
		this.styleGenerator.setStrokeWidth(strokeWidth);
	};

	TextFilterSVG.prototype.addFilter = function(filter) {
		this.filterGenerator.addFilter(filter);
	};

	TextFilterSVG.prototype.removeFilter = function(filter) {
		this.filterGenerator.removeFilter(filter);
	};

	TextFilterSVG.prototype.renderToElement = function(element) {
		element.innerHTML = this._render();
	};

	TextFilterSVG.prototype._render = function() {
		var data = {
			textWidth: this.width,
			textHeight: this.height,
			styles: this.styleGenerator.generate(),
			filters: this.filterGenerator.generate(),
			texts: this._getTexts()
		};
		return template(data);
	};

	TextFilterSVG.prototype._getTexts = function() {
		// TODO: Generate text for layers
		var texts = this.styleGenerator.getTexts(this.getPositionX(), this.getPositionY(), this.text);
		return texts;
	};

	TextFilterSVG.prototype.getPositionX = function() {
		return 	Math.round(this.width/2);
	};

	TextFilterSVG.prototype.getPositionY = function() {
		return 	Math.round(this.height/2) + this.styleGenerator.fontSize/3;
	};

	TextFilterSVG.prototype.setSize = function(w, h) {
		this.width = w;
		this.height = h;
	};

	return TextFilterSVG;
});