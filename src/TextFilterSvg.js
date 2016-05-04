define("TextFilterSVG",["./svg/StyleGenerator", "./template/svg.hbs"], function(StyleGenerator, template) {

	var TextFilterSVG = function() {
		this.filters = {};
		this.styleGenerator = new StyleGenerator();
		// TODO: filter generator
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

	TextFilterSVG.prototype.addFilter = function(filter) {
		if (!filters[filter.getId()]) {
			filters[filter.getId()] = filter;
		}
	};

	TextFilterSVG.prototype.removeFilter = function(filter) {
		if (filters[filter.getId()]) {
			delete filters[filter.getId()];
		}
	};

	TextFilterSVG.prototype.renderToElement = function(element) {
		element.innerHTML = this._render();
	};

	TextFilterSVG.prototype._render = function() {
		var data = {
			textWidth: this.width,
			textHeight: this.height,
			styles: this.styleGenerator.generate(),
			filters: [],
			texts: this._getTexts()
		};
		return template(data);
	};

	TextFilterSVG.prototype._getTexts = function() {
		var texts = [];
		var baseText = {
			positionX: Math.round(this.width/2),
			positionY: Math.round(this.height/2),
			textClass: this.styleGenerator.getBaseClass(),
			text: this.text
		};
		texts.push(baseText);
		return texts;
	};

	TextFilterSVG.prototype.setSize = function(w, h) {
		this.width = w;
		this.height = h;
	};

	return TextFilterSVG;
});