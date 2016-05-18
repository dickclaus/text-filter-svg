"use strict";
var HandleBars = require("handlebars/runtime");
window.HandleBars = HandleBars;

define(["./src/TextFilterSVG", "./src/filters/GlowFilter"], function(TextFilterSVG, GlowFilter) {
	var glowFilter = new GlowFilter();
	var textFilterSVG = new TextFilterSVG();
	textFilterSVG.setSize(300, 150);
	textFilterSVG.setText("Text Filter SVG");
	textFilterSVG.setFontFamily("PT Sans");
	textFilterSVG.setFontSize(42);
	textFilterSVG.addFilter(glowFilter);
	var element = document.getElementsByClassName("text-container")[0];
	textFilterSVG.renderToElement(element);
});

