Text filter svg
===============

Library to create photoshop like text effect in svg and embed them in HTML

For now library supports only GlowFilter

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

[link](https://www.w3.org/TR/SVG/filters.html "SVG W3C Specification")


