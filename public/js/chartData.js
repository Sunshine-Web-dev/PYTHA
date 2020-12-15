var chartData = {
	type: 'doughnut',
	data: {
		datasets: [],
	},
	options: {
		events: ['click'],
		responsive: true,
		rotation : rotStart * Math.PI,
		cutoutPercentage : 35,
		legend: {
			// position: 'top'
			//reverse : true,
		},
		title: {
			display: false,
			text: 'PYTHIA'
		},
		animation: {
			animateScale: true,
			animateRotate: true
		},
		tooltips: {

			// Disable the on-canvas tooltip
			enabled: false,

			custom: function(tooltipModel) {
					
				if(productMode || projectMode){
					// console.log(levels.getLevel(tooltipModel.dataPoints[0].datasetIndex));
					setToState("modules");
					const slider = document.getElementById("myRange");
					slider.value = 3;
				}
				if(projectMode) return;
				if(productMode) return;
				// Hide if no tooltip
					if (tooltipModel.opacity === 0) {
						if(!keepTooltip) $('#tooltip').hide();
						return;
					}

				function getBody(bodyItem) {
					return bodyItem.lines;
				}

				// Set Text
				if (tooltipModel.body) {
					let tooltipItem = tooltipModel.dataPoints[0];
					let level = levels.getLevel(tooltipItem.datasetIndex);
					let levelEntries = getAllEntriesOfLevel(level);
					let dataIndex = tooltipItem.index;

					let type = levels.getLevelName(level);
					let entry = levelEntries[dataIndex];
					let title = entry.hasOwnProperty("title") ? entry.title : entry.label;
					let description = levelEntries[dataIndex].text;

					$('#tooltip .type').html(type);
					$('#tooltip .title').html(title);
					$('#tooltip .description').html(description);
					$('#tooltip .footer').html("");
					$('#tooltip').show();
				}
			}
		},
		elements: {
			center: {
			  text: 'PYTHIA',
			  color: 'rgba(255,255,255, 1)', // Default is #000000
			  fontStyle: 'Raleway', // Default is Arial
			  fontWeight : '300',
			  sidePadding: 25, // Default is 20 (as a percentage)
			//   minFontSize: 40, // Default is 20 (in px), set to false and text will not wrap.
			  lineHeight: 40, // Default is 25 (in px), used for when text wraps
			  drawCircle : false,
			  circleBackground : 'rgba(25, 75, 109, .1)',
			}
		}		
	}
};