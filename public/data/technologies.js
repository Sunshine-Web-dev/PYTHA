var technologies = [
	{
		'label' : "Analysis",
		'color' : "rgba(79, 186, 74, 1)",
		'size' : 1,
		'title' : "Analysis",
		'text' : 'Analyse processes in retrospect and produce a report as a result.',
		'components' : [
			{
				'label' : "Tabular data",
				'size' : 1,
				'title' : "Tabular data",
				'text' : 'Compare different distributions with each other and find the differences.',
				'components' : [	
					{
						'label' : "Profiler",
						'key' : "profiler",
						'size' : 1,
						'title' : "Profiler",
						'text' : 'Creates distinguishable profiles for specific product groups like <em>How do the products/parts that are within tolerance differ from those outside?</em> or <em>Which properties of products/parts are relevant to distinguish between good and bad quality?</em>.</p><p><strong>Example 1</strong><br>In a discrete manufacturing process, gear boxes are produced. At the end the slippage time is determined for each gear box to check if it is within the tolerance. What data and characteristics distinguish the particularly good/bad from the average?</p><p><strong>Example 2</strong><br>In a manufacturing plant, each worker books the time required for each operation. The machines, tools and materials used are recorded. KPIs are determined on the basis of this data. Are there combinations that are sometimes significantly worse than they should be in general? Are there, for example, abnormalities in shifts, weekdays, deliveries, etc.?</p><p><strong>Result</strong><br>HTML report',
					},
				]
			},
			{
				'label' : "Timeseries data",
				'size' : 2,
				'text' : 'Understand the dependencies in any given system.',
				'title' : 'Timeseries data',
				'components' : [
					{
						'label' : "Tracer",
						'key' : "tracer",
						'size' : 1,
						'title' : "Tracer",
						'text' : 'Within your time series data, mark different states or time intervals and let Tracer figure out the differences between them.</p><p><strong>Example</strong><br>A once in a long time bad event happend, that never happend within the history data. When did the condition of the system deteriorate unnoticed and which signals were responsible?</p><p><strong>Result</strong><br>HTML report',
					},	
					{
						'label' : "Investigator",
						'key' : "eventexplorer",
						'size' : 1,
						'title' : "Event Explorer",
						'text' : 'Investigate bad events in a process like <em>Why does my process sometimes operate out of tolerance?</em> or <em>Why does my process break from time to time?</em> by providing indicators for those events, that help avoiding them.</p><p><strong>Example</strong><br>A hydrolic system controls the pressure of a rolling unit. Why does the hydrolic system break down from time to time?</p><p><strong>Result</strong><br>HTML report',
					},					
					/*{
						'label' : "Process\n Explorer",
						'size' : 1,
						'title' : 'Process Explorer',
						'text' : 'Find all influencing factors on specific signals or parameters of your process, ordered by their impact.</p><p><strong>Example</strong><br>Which of the signals pressure, torque, speed and temperatur do influence the produced material strength and how big is the impact compared to the others?</p><p><strong>Result</strong><br>HTML report',
					},*/
					{
						'label' : "Illuminator",
						'key' : "factoryexplorer",
						'size' : 1,
						'title' : 'Factory Explorer',
						'text' : 'Reveals all dependencies within all processes in a factory. The result is a HTML report, that let\'s you browse through those dependencies. You can zoom to any level of detail to figure out exactly, how certain entities react to each other.</p><p><strong>Result</strong><br>HTML report',
					},
				]
			},
		]
	},	
	{
		'label' : "Detection",
		'color' : "rgba(184,104,69, 1)",
		'size' : 1,
		'title' : 'Detection',
		'text' : 'Live detection on data streams.',
		'components' : [
			{
				'label' : "Undirected",
				'size' : 1,
				'title' : 'Undirected',
				'text' : 'Anomalous behavior is defined based on a deviation of the data stream from the recent past..',
				'components' : [
					{
						'label' : "Anomaly detector",
						'key' : "anomalydetector",
						'size' : 1,
						'title' : 'Anomaly detector',
						'text' : 'Live detection of anomalies on data streams. No training in advance, instead, the self training starts with the data stream. The detector incrementally learns the structur of the data and anomalies.',
					},
				]
			},
			{
				'label' : "Directed",
				'size' : 1,
				'title' : 'Directed',
				'text' : 'Anomalous behavior is defined by the presence of predefined patterns in the data streams.',
				'components' : [
					{
						'label' : "State detector",
						'key' : "statedetector",
						'size' : 1,
						'title' : "State detector",
						'text' : 'Live detection of conditions that result in unwanted, predefined events. For example, machine failures, vibration events or production stops.',
					},					
				]
			},
		]
	},	
	{
		'label' : "Prediction",
		'color' : "rgba(61, 125, 177, 1)",
		'size' : 1,
		'title' : 'Prediction',
		'text' : 'Live prediction of signals on a data stream based on a regression model.',
		'components' : [
			{
				'label' : "Timeseries or \n  tabular data",
				'size' : 3,
				'title' : 'Process data',
				'text' : 'Classical regression of history data to predict the present or future signal value based on history data.',
				'components' : [
					{
						'label' : "Virtual Sensor Builder",
						'key' : "vsb",
						'size' : 1,
						'title' : "Virtual Sensor Builder",
						'text' : 'Create software sensors automatically e.g. to replace expensive lab measurements by a continuous live sensor or to directly "measure impossible things" like e.g. quality</p><p><strong>Example</strong><br>Normally, ensuring a certain target paper quality requires continuous adjustments from a process engineer, because lab measurements can only be made hourly. Because it is fairly easy to exceed the target quality when adjusting to a new level, costs quickly rise. By using a software sensor however, the paper quality can be calculated live, which saves time. And because the process engineer can react and adjust instantaneously, only a small safety margin is necessary, which is much more cost-efficient.</p><p><strong>Result</strong><br>HTML report, Software model.',
					},	
									
				]
			},		
		]
	}
];