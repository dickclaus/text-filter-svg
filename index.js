"use strict";
var HandleBars = require("handlebars/runtime");
window.HandleBars = HandleBars;

define(["./src/TextFilterSVG", "./src/filters/GlowFilter", "./src/filters/ShadowFilter"], function(TextFilterSVG, GlowFilter, ShadowFilter) {
	var glowFilter = new GlowFilter();
	glowFilter.setBlur(12, 12);
	glowFilter.setFilterSize(180, 180);
	glowFilter.setFilterOffset(-30, -30);
	glowFilter.setColor(0xFF0000);

	var shadowFilter = new ShadowFilter();
	var textFilterSVG = new TextFilterSVG();
	textFilterSVG.setSize(300, 150);
	textFilterSVG.setText("Text Filter SVG");
	textFilterSVG.setFontFamily("PT Sans");
	textFilterSVG.setFontSize(42);
	textFilterSVG.addFilter(glowFilter);
	textFilterSVG.addFilter(shadowFilter);
	var element = document.getElementsByClassName("text-container")[0];
	textFilterSVG.renderToElement(element);
});

