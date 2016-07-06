require({
	paths: {
		templates:      '../templates',
		Handlebars:     'libs/handlebars',
		text:           'libs/text',
		hbars:          'libs/hbars'
	},
	shim: {
		Handlebars: {
			exports: 'Handlebars'
		}
	},

	onBuildWrite : function(moduleName, path, content){

		// replace handlebars with the runtime version
		if (moduleName === 'Handlebars') {
			path = path.replace('handlebars.js','handlebars.runtime.js');
			content = fs.readFileSync(path).toString();
			content = content.replace(/(define\()(function)/, '$1"handlebars", $2');
		}
		return content;
	}

}, ['TextFilterSVG'], function (TextFilterSVG) {
	'use strict';

	return TextFilterSVG;
});