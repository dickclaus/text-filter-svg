requirejs.config({
	baseUrl: 'js',
	paths: {
		Handlebars: 'libs/handlebars',
		text: 'libs/text',
		hbars: 'libs/hbars'
	},
	hbars: {
		extension: '.hbs', // default = '.html'
		compileOptions: {}  // options object which is passed to Handlebars compiler
	},
	shim: {
		Handlebars: {
			exports: 'Handlebars'
		}
	}
});

// Start the main app logic.
requirejs(['TextFilterSVG', './filters/GlowFilter', './filters/ShadowFilter', './svg/styles/LinearGradient', './math/SVGRectangle'],
	function(TextFilterSVG, GlowFilter, ShadowFilter, LinearGradient, SVGRectangle) {
		"use strict";
		var glowFilter = new GlowFilter();
		glowFilter.setBlur(12, 12);
		glowFilter.setFilterSize(180, 180);
		glowFilter.setFilterOffset(-30, -30);
		glowFilter.setColor("red");

		var svgRectangle = new SVGRectangle("0%", "0%", "100%", "0%");
		var linearGradient = new LinearGradient("linear", svgRectangle);
		linearGradient.addGradientStop(0, "#ff0000", 1);
		linearGradient.addGradientStop(100, "#00ff00", 1);

		var shadowFilter = new ShadowFilter();
		var textFilterSVG = new TextFilterSVG();
		textFilterSVG.setSize(300, 150);
		textFilterSVG.setText("Text Filter SVG");
		textFilterSVG.setFontFamily("PT Sans");
		textFilterSVG.setFontSize(42);
		textFilterSVG.setStrokeStyle("linear");
		textFilterSVG.setStrokeWidth(2.5);
		textFilterSVG.addGradient(linearGradient);
		textFilterSVG.addFilter(glowFilter);
		textFilterSVG.addFilter(shadowFilter);
		var element = document.getElementsByClassName("text-container")[0];
		textFilterSVG.renderToElement(element);
});