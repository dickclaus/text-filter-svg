"use strict";
var HandleBars = require("handlebars/runtime");
window.HandleBars = HandleBars;

define(["./src/TextFilterSVG"], function(TextFilterSVG) {
	var textFilterSVG = new TextFilterSVG();
	textFilterSVG.setSize(300, 150);
	textFilterSVG.setText("Text Filter SVG");
	textFilterSVG.setFontFamily("PT Sans");
	textFilterSVG.setFontSize(32);
	var element = document.getElementsByClassName("text-container")[0];
	textFilterSVG.renderToElement(element);
});

