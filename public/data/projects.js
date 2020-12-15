var companyKeys = {
    'pp' : "PerfectPattern", 
    'mpdv' : "MPDV", 
    'voith' : "VOITH", 
};

var projects = [
    {
        'title' : "AI Analysis",
        'key' : 'aianalysis',
        'companyKey' : 'pp',
        'techKeys' : ['profiler','tracer','eventexplorer', 'factoryexplorer'],
        'text' : 'AI Analysis helps you gain valuable insights into your processes via your data. With AI Analysis, you can ask questions to your data (time-series or operational data) such as "Why does this happen...?", "What are the differences between...?", "How are these related...?", "Can this be predicted from...?" and "How strongly is this influenced by...?". AI Analysis contains several automated tools to adress those.</p><p><strong>Profiling  anomalies (operational data)</strong><br>Components are produced in a discrete manufacturing process and data is collected during production in a tabular form (event, not time-series based). KPIs (e.g. quality) can be determined for every component after production. You want to know e.g. what data and characteristics distinguish the particularly good/bad components from the average ones. This tool gives an answer to that by creating distinguishable profiles for specific product groups that are provided as HTML report.</p><p><strong>Tracing differences (time-series data)</strong><br>Within your time series data, select different states or time intervals you need to distinguish. This tool figures out the differences between them and provides the result as HTML report.</p><p><strong>Investigating events</strong><br>Define bad events like process breaks or production stops and investigate, which conditions within your process are correlated to these bad events. As a result, this investigation provides an HTML report with root cause indicators for those events, that help avoiding them. In a next step, these results can be used to live prevent those events from happening (see ...).</p><p><strong>Illuminating dependencies</strong><br>Reveal all dependencies within a process or a network of processes to give you the opportunity to deep dive into your processes at diferent zoom levels. The result is a HTML report, that let\'s you browse through those dependencies. You can zoom to any level of detail to figure out exactly, whoch processes react to each other.',
    },   
    {

        'title' : "AI Sensors",
        'key' : 'aisensors',
        'companyKey' : 'pp',
        'techKeys' : ['vsb', 'factoryexplorer'],
        'text' : ' my email:jigudos060698@gmail.com skype: live:.cid.8911f5f9be2d6fd6' ,
    }, 

    {
        'title' : "AI Prevention",
        'key' : 'aiprevent',
        'companyKey' : 'pp',
        'techKeys' : ['eventexplorer', 'statedetector'],
        'text' : 'Prevent bad events from happening. //TODO',
    },    

    {
        'title' : "Setup Costs Predictor",
        'key' : 'setupcostsmpdv',
        'companyKey' : 'mpdv',
        'techKeys' : ['vsb'],
        'text' : 'Predict the setup costs for a certain combination\nof machinery, tools, material and more.',
    },

    {
        'title' : "Schichbezogene Nutzgradanalyse",
        'key' : 'nutzgradmpdv',
        'companyKey' : 'mpdv',
        'techKeys' : ['profiler'],
        'text' : 'The MPDV Hydra user can analyse the KPIs of his processes.',
    },

    {
        'title' : 'Break Protector',
        'key' : 'breakprotectorvoith',
        'companyKey' : 'voith',
        'techKeys' : ['eventexplorer', 'statedetector'],
        'text' : 'I am a product',
    },

    {
        'title' : 'Virtual Sensors Builder',
        'key' : 'vsbvoith',
        'companyKey' : 'voith',
        'techKeys' : ['vsb', 'factoryexplorer'],
        'text' : 'Driverless generation of Software Sensors from Voiths OnCumulus platform.',
    },
];