function extendChartsJS(){
    Chart.pluginService.register({
		beforeDraw: function(chart) {
		  if (chart.config.options.elements.center) {
			// Get ctx from string
			var ctx = chart.chart.ctx;
  
			// Get options from the center object in options
			var centerConfig = chart.config.options.elements.center;
			var fontStyle = centerConfig.fontStyle || 'Arial';
			var fontWeight = centerConfig.fontWeight || '400';
			var txt = centerConfig.text;
			var color = centerConfig.color || '#000';
			var maxFontSize = centerConfig.maxFontSize || 75;
			var sidePadding = centerConfig.sidePadding || 20;
			var sidePaddingCalculated = (sidePadding / 100) * (chart.innerRadius * 2);

			// Start with a base font of 30px
			ctx.font = "30px " + fontStyle;
  
			// Get the width of the string and also the width of the element minus 10 to give it 5px side padding
			var stringWidth = ctx.measureText(txt).width;
			var elementWidth = (chart.innerRadius * 2) - sidePaddingCalculated;
  
			// Find out how much the font can grow in width.
			var widthRatio = elementWidth / stringWidth;
			var newFontSize = Math.floor(30 * widthRatio);
			var elementHeight = (chart.innerRadius * 2);
  
			// Pick a new font size so it will not be larger than the height of label.
			var fontSizeToUse = Math.min(newFontSize, elementHeight, maxFontSize);
			var minFontSize = centerConfig.minFontSize ?? 20;
			var lineHeight = centerConfig.lineHeight || 25;
			var wrapText = false;
  
			//check if text has to be wrapped
			if (minFontSize && fontSizeToUse < minFontSize) {
			  fontSizeToUse = minFontSize;
			  wrapText = true;
			}

			//Draw circle
			var drawCircle = centerConfig.drawCircle || false;
			if(drawCircle){
				var centerX = ((chart.chartArea.left + chart.chartArea.right) / 2);
				var centerY = ((chart.chartArea.top + chart.chartArea.bottom) / 2);
				ctx.beginPath();
				ctx.arc(centerX, centerY, Math.ceil(elementWidth / 2) + 10, 0, 2 * Math.PI, false);
				ctx.fillStyle = centerConfig.circleBackground || '#ddd';
				ctx.fill();
			}

			// Set font settings to draw it correctly.
			ctx.textAlign = 'center';
			ctx.textBaseline = 'middle';
			var centerX = ((chart.chartArea.left + chart.chartArea.right) / 2);
			var centerY = ((chart.chartArea.top + chart.chartArea.bottom) / 2);
			ctx.font = fontWeight + " " + fontSizeToUse + "px " + fontStyle;
			ctx.fillStyle = color;

			//text witout wrapping
			if (!wrapText) {
			  ctx.fillText(txt, centerX, centerY);
			}

			//text wrapping
			else{
				var words = txt.split(' ');
				var line = '';
				var lines = [];
	  
				// Break words up into multiple lines if necessary
				for (var n = 0; n < words.length; n++) {
				  var testLine = line + words[n] + ' ';
				  var metrics = ctx.measureText(testLine);
				  var testWidth = metrics.width;
				  if (testWidth > elementWidth && n > 0) {
					lines.push(line);
					line = words[n] + ' ';
				  } else {
					line = testLine;
				  }
				}
	  
				// Move the center up depending on line height and number of lines
				centerY -= (lines.length / 2) * lineHeight;
	  
				for (var n = 0; n < lines.length; n++) {
				  ctx.fillText(lines[n], centerX, centerY);
				  centerY += lineHeight;
				}
	
				//Draw text in center
				ctx.fillText(line, centerX, centerY);
			}
		  }
		}
	});
}