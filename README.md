[![Build status][travis-image]][travis-url] [![Dependency status][dependency-image]][dependency-url]

Text filter svg
===============

Library to create photoshop like text effect in svg and embed them in HTML

For now library supports only GlowFilter, ShadowFilter, Stroke
You can use hex colors or web name colors.

Usage:
```javascript
    var glowFilter = new GlowFilter();
    var textFilterSVG = new TextFilterSVG();
    textFilterSVG.setSize(300, 150);
    textFilterSVG.setText("Text Filter SVG");
    textFilterSVG.setFontFamily("PT Sans");
    textFilterSVG.setFontSize(42);
    textFilterSVG.addFilter(glowFilter);
    var element = document.getElementsByClassName("text-container")[0];
    textFilterSVG.renderToElement(element);
```

To start dev server:

```
npm start
```

Then goto [http://127.0.0.1:8080/](http://127.0.0.1:8080/)

Library based on following documentation:

[SVG W3C Specification](https://www.w3.org/TR/SVG/filters.html)


[travis-image]: https://travis-ci.org/
[travis-url]: https://travis-ci.org/
[dependency-image]: https://david-dm.org/
[dependency-url]: https://david-dm.org/


