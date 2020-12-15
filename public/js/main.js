var levels; 
var doughnut;
var lastState = null;
var sliderPause = false;
var keepTooltip = false;
var productMode = false;
var projectMode = false;

function reduceColor(colorRgbaString){
	colorRgbaString = colorRgbaString.split("  ").join("").split(" ").join("");
	let colorArr = colorRgbaString.split(",");
	return(colorArr[0] + ", " + colorArr[1] + ", " + colorArr[2] + ", " + (Math.floor((1 - colorReduction)*parseFloat(colorArr[3]) * 10) / 10) + ")");
}

function getAllEntriesOfLevel(
	targetLevel, 
	matches = [], 
	currentLevel = 0, 
	parent = null, 
	entries = JSON.parse(JSON.stringify(technologies))
	){

	//summarize
	let totalSize = 0;
	entries.forEach(entry => {
		totalSize += entry.size;
	});

	//add information to each sibling
	let totalPosition = parent === null ? rotStart : parent.position;
	entries.forEach(entry => {
		entry.absoluteSize = entry.size / totalSize * (parent === null ? 1 : parent.absoluteSize);
		entry.position = totalPosition;
		let targetRotationInDegree = 360 * (entry.position + entry.absoluteSize / 2);
		entry.rotation = -90 + targetRotationInDegree - (targetRotationInDegree < 180 ? 0 : 1) * 180;
		totalPosition += entry.absoluteSize;
		if(parent !== null) entry.color = reduceColor(parent.color);
	});

	entries.forEach(entry => {
		if(targetLevel == currentLevel){
			delete(entry.components);
			matches.push(entry);
		}else{
			if(entry.hasOwnProperty("components")){
				parent = entry;
				let newCurrentLevel = currentLevel + 1;
				matches = getAllEntriesOfLevel(targetLevel, matches, newCurrentLevel, parent, entry.components);
			}else{
				console.log('no components');
			}
		}
	});
	return matches;
}

function createDataset(levelEntries){
	let chartDataset = {
		data : (function(){
			let chartData = [];
			levelEntries.forEach(entry => {
				chartData.push(entry.absoluteSize);
			});
			return chartData;
		})(),
		
		backgroundColor : (function(){
			let chartColors = [];
			levelEntries.forEach(entry => {
				chartColors.push(entry.label !== "" ? entry.color : 'rgba(0,0,0,0)');
			});
			return chartColors;
		})(),

		borderWidth : (function(){
			let borderWidths = [];
			levelEntries.forEach(entry => {
				borderWidths.push(entry.label !== "" ? 1 : 0);
			});
			return borderWidths;
		})(),

		borderColor : (function(){
			let borderColors = [];
			levelEntries.forEach(entry => {
				borderColors.push('rgba(255, 255, 255, 1)');
			});
			return borderColors;
		})(),		

		hoverBackgroundColor : (function(){
			let hoverBackgroundColors = [];
			levelEntries.forEach(entry => {
				let opacity = parseFloat(entry.color.split(" ").join("").split(",")[3].split(")")[0]);
				let hoverOpacity = Math.min(1, (1.15 * opacity));
				hoverBackgroundColors.push('rgba(27, 57, 81, ' + hoverOpacity + ')');
			});
			return hoverBackgroundColors;
		})(),	
				
		datalabels: {
			labels: {
				title: {
					color: '#fff',
				}
			},

			formatter: function(value, context) {
				return getAllEntriesOfLevel(levels.getLevel(context.datasetIndex))[context.dataIndex].label;
			},
			rotation : function(context){
				return getAllEntriesOfLevel(levels.getLevel(context.datasetIndex))[context.dataIndex].rotation;
			}
		}
	}
	return chartDataset;
}

function setToState(state){
	switch(state){
		case "technology":
			productMode = false;
			projectMode = false;
			$('#products-wrapper').hide();
			$('#projects-wrapper').hide();
			$('#tooltip-wrapper').show();
			levels.removeLevel(1);
			if(lastState === "modules" || "products"||"projects") levels.removeLevel(2);
			levels.registerLevel(0, 0, "Technology");
			chartData.data.datasets.shift();
			if(lastState === "modules") chartData.data.datasets.shift();
			if(lastState === "products") chartData.data.datasets.shift();
			if(lastState === "projects") chartData.data.datasets.shift();
			doughnut.update();
			break;

		case "areas":
			productMode = false;
			projectMode = false;
			$('#products-wrapper').hide();
			$('#projects-wrapper').hide();
			$('#tooltip-wrapper').show();
			if(lastState === "modules"){
				levels.removeLevel(2);
				levels.registerLevel(0, 1, "Technology");
				levels.registerLevel(1, 0, "Area");
				chartData.data.datasets.shift();
				doughnut.update();
			}else{
				if(lastState ==="products"){
					levels.removeLevel(2);
					levels.registerLevel(0, 1, "Technology");
					levels.registerLevel(1, 0, "Area");
					chartData.data.datasets.shift();
					doughnut.update();
				}else{
					if(lastState ==="projects"){
						levels.removeLevel(2);
						levels.registerLevel(0, 1, "Technology");
						levels.registerLevel(1, 0, "Area");
						chartData.data.datasets.shift();
						doughnut.update();
					}else{
						levels.registerLevel(0, 1, "Technology");
						levels.registerLevel(1, 0, "Area");
						chartData.data.datasets = [createDataset(getAllEntriesOfLevel(1))].concat(chartData.data.datasets);
						doughnut.update();
					}
				}
			}
			break;

		case "modules":
			productMode = false;
			projectMode = false;
			$('#products-wrapper').hide();
			$('#tooltip-wrapper').show();
			$('#projects-wrapper').hide();
			if(lastState === "products") {doughnut.update(); break;};
			if(lastState === "projects") {doughnut.update(); break;};
			levels.registerLevel(0, 2, "Technology");
			levels.registerLevel(1, 1, "Area");
			levels.registerLevel(2, 0, "Module");
			if(lastState === "technology") chartData.data.datasets = [createDataset(getAllEntriesOfLevel(1))].concat(chartData.data.datasets);
			chartData.data.datasets = [createDataset(getAllEntriesOfLevel(2))].concat(chartData.data.datasets);
			doughnut.update();
			break;
	
		case "products":
			productMode = true;
			projectMode = false;
			$('#tooltip-wrapper').hide();
			$('#products-wrapper').show();
			$('#projects-wrapper').hide();
			if(lastState === "modules") {doughnut.update(); break;};
			if(lastState === "projects") {doughnut.update(); break;};
			levels.registerLevel(0, 2, "Technology");
			levels.registerLevel(1, 1, "Area");
			levels.registerLevel(2, 0, "Module");
			if(lastState === "technology") chartData.data.datasets = [createDataset(getAllEntriesOfLevel(1))].concat(chartData.data.datasets);
			chartData.data.datasets = [createDataset(getAllEntriesOfLevel(2))].concat(chartData.data.datasets);
			doughnut.update();
			break;

		case "projects":
			projectMode = true;
			productMode = false;
			$('#tooltip-wrapper').hide();
			$('#products-wrapper').hide();
			$('#projects-wrapper').show();
			if(lastState === "modules") {doughnut.update(); break;};
			if(lastState === "products"){doughnut.update(); break;};
			levels.registerLevel(0, 2, "Technology");
			levels.registerLevel(1, 1, "Area");
			levels.registerLevel(2, 0, "Module");
			if(lastState === "technology") chartData.data.datasets = [createDataset(getAllEntriesOfLevel(1))].concat(chartData.data.datasets);
			chartData.data.datasets = [createDataset(getAllEntriesOfLevel(2))].concat(chartData.data.datasets);
			doughnut.update();
			break;


		default:
			break;
	}
	lastState = state;
}

function createProducts(){
	function getMatchingEntryIds(el){
		let entries = getAllEntriesOfLevel(2);
		let matchingEntries = [];
		let techKeys = el.attr("keys").split(" ");
		entries.forEach((entry, index) => {
			if(techKeys.includes(entry.key)) matchingEntries.push(index);
		});
		return matchingEntries;
	}

	function getProductByKey(key){
		for(var i = 0; i < products.length; i++){
			let product = products[i];
			if(product.key === key) return product;
		}
		return null;
	}
	var oldone = null;
	
	function addListeners(productDiv){
		productDiv.click(function(){
			let el = $(this);
			let product = getProductByKey(el.attr("key"));
			$('#product-company').html(companyKeys[product.companyKey]);
			$('#product-title').html(product.title);
			$('#product-description').html(product.text);
			$('#products-description').show();
			
			// hover target segments.
			if(oldone != null){
				getMatchingEntryIds(oldone).forEach(entryIndex => {
					var activeSegment_prev = doughnut.data.datasets[0]._meta[0].data[entryIndex];
					doughnut.updateHoverStyle([activeSegment_prev], null, false);
				});
			}
			getMatchingEntryIds(el).forEach(entryIndex => {
				var activeSegment = doughnut.data.datasets[0]._meta[0].data[entryIndex];
				doughnut.updateHoverStyle([activeSegment], null, true);
			});
			
			oldone = el;
			doughnut.render();
		});
	}

	let parent = $('#products-list');
	for(var companyKey in companyKeys){
		let productsTitle = $('<div></div>')
		.html(companyKeys[companyKey])
		.addClass("title")
		.addClass(companyKey);
		parent.append(productsTitle);

		products.forEach(product => {
			if(product.companyKey !== companyKey) return
			let productDiv = $('<div></div>')
			.html(product.title)
			.addClass("product")
			.attr("keys", product.techKeys.join(" "))
			.attr("key", product.key);
			parent.append(productDiv);
			addListeners(productDiv);
		});
	}

}
function createProjects(){
	function getMatchingEntryIds(el){
		let entries = getAllEntriesOfLevel(2);
		let matchingEntries = [];
		let techKeys = el.attr("keys").split(" ");
		entries.forEach((entry, index) => {
			if(techKeys.includes(entry.key)) matchingEntries.push(index);
		});
		return matchingEntries;
	}
	function getProjectByKey(key){
		for(var i = 0; i < projects.length; i++){
			let project = projects[i];
			if(project.key === key) return project;
		}
		return null;
	}
	var oldone = null;
	function addListeners1(projectDiv){
		projectDiv.click(function(){
			let el = $(this);
			let project = getProjectByKey(el.attr("key"));
			$('#project-company').html(companyKeys[project.companyKey]);
			$('#project-title').html(project.title);
			$('#project-description').html(project.text);
			$('#projects-description').show();
			
			if(oldone != null){
				getMatchingEntryIds(oldone).forEach(entryIndex => {
					var activeSegment_prev = doughnut.data.datasets[0]._meta[0].data[entryIndex];
					doughnut.updateHoverStyle([activeSegment_prev], null, false);
				});
			}
			getMatchingEntryIds(el).forEach(entryIndex => {
				var activeSegment = doughnut.data.datasets[0]._meta[0].data[entryIndex];
				doughnut.updateHoverStyle([activeSegment], null, true);
			});

			oldone = el;
			doughnut.render();
		});
	}

	let parent = $('#projects-list');
	for(var companyKey in companyKeys){
		let projectsTitle = $('<div></div>')
		.html(companyKeys[companyKey])
		.addClass("title")
		.addClass(companyKey);
		parent.append(projectsTitle);

		projects.forEach(project => {
			if(project.companyKey !== companyKey) return
			let projectDiv = $('<div></div>')
			.html(project.title)
			.addClass("project")
			.attr("keys", project.techKeys.join(" "))
			.attr("key", project.key);
			parent.append(projectDiv);
			addListeners1(projectDiv);
		});
	}
}

window.onload = function() {
	//extend custom
	extendChartsJS();
	
	Chart.helpers.merge(Chart.defaults.global.plugins.datalabels, {
		color: '#000',
		font : {
			weight: '500',
			size : '16'
		}
	});
	if(window.innerWidth <= 414){
		Chart.helpers.merge(Chart.defaults.global.plugins.datalabels, {
			color: '#000',
			font : {
				weight: '500',
				size : '10'
			}
		});
	}

	//INIT
	$('#canvas-holder').css("width", size + "px").css("height", size + "px");
	$('#chart-area').css("width", size + "px").css("height", size + "px");
	$('#sliderWrapper').css("width", size + "px");

	levels = new Levels();
	//levels.registerLevel(0, 0, "Field");
	
	var ctx = document.getElementById('chart-area').getContext('2d');
	doughnut = new Chart(ctx, chartData);

	createProducts();
	createProjects();

	chartData.data.datasets = createDataset(getAllEntriesOfLevel(0));
	lastState = "technology";
	setToState("modules");
	
	//LISTENERS
	var slider = document.getElementById("myRange");
	slider.oninput = function() {
		if(sliderPause) return;
		$('#sliderWrapper .fontWrapper div').removeClass("selected");
		$('#sliderWrapper .fontWrapper div.item-' + this.value).addClass("selected");
		let indexToState = {
			1 : "technology",
			2 : "areas",
			3 : "modules",
			4 : "products",
			5 : "projects"
		};
		setToState(indexToState[this.value]);
	}
};
function myfunction(){
	$('#tooltip').hide();
}
