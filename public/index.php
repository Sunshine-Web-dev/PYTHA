
<!doctype html>
<html>
	<head>
		<title>Doughnut Chart</title>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1"/>
	
		<link href="fonts/raleway/font.css" rel="stylesheet">
		<link href="css/main.css" rel="stylesheet">

		<script src="config.js"></script>
		<script src="data/technologies.js"></script>
		<script src="data/products.js"></script>
		<script src="js/jquery-3.5.1.min.js"></script>
		<script src="js/Chart.min.js"></script>
		<script src="js/chartjs-plugin-datalabels.js"></script>
		<script src="js/chartData.js"></script>
		<script src="js/extendChartsJS.js"></script>
		<script src="js/Levels.js"></script>
		<script src="js/main.js"></script>
		<script src= "data/projects.js"></script>
	</head>

	<body>
		<div id="layer"></div>
		<img src="img/PP_Wortbildmarke-white_transp.png" id="logo"/>
		<div id="main-wrapper">
			<div>
				<div id="canvas-holder">
					<canvas id="chart-area"></canvas>
				</div>
				<br>
				<div id="sliderWrapper">
				<input type="range" min="1" max="5" value="3" class="slider" id="myRange" onchange="myfunction()">
					<div class="fontWrapper">
						<div class="item-1">Technology</div>
						<div class="item-2">Areas of application</div>
						<div class="item-3 selected">Modules</div>
						<div class="item-4">Products</div>
						<div class="item-5">projects</div>
					</div>
				</div>
			</div>
			<div id="tooltip-wrapper">
				<div id="tooltip" style="display: none;">
					<div class="type">type</div>
					<div class="title">Title</div>
					<p class="description">Description</p>
					<div class="footer">Footer</div>
				</div>
			</div>
			<div id="products-wrapper" style="display: none;">
				<div id="products-list">
					<h2>Products</h2>
				</div>
				<div id="products-description" style="display: none;">
					<div class="type" id="product-company">Company</div>
					<div class="title" id="product-title">Title</div>
					<p class="description" id="product-description">Description</p>
				</div>
			</div>
			<div id="projects-wrapper" style="display: none;">
				<div id="projects-list">
					<h2>projects</h2>
				</div>
				<div id="projects-description" style="display: none;">
					<div class="type" id="project-company">Company</div>
					<div class="title" id="project-title">Title</div>
					<p class="description" id="project-description">Description</p>
				</div>
			</div>
		</div>
	</body>
</html>
