// Set URL as constant value and log Json Data
const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";
d3.json(url).then(function(data) {
    console.log(data);
});

// Create function to build charts
function init() {

    // Use D3 to select the dropdown menu
    let dropdownMenu = d3.select("#selDataset");

    // retrieve sample names from data and add to dropdown menu
    d3.json(url).then((data) => {
        let sampleNames = data.names;
        sampleNames.forEach((sample) => {
            console.log(sample);
            dropdownMenu.append("option").text(sample).property("value", sample);
    });
    

    // Use first sample from list to build initial plots
    let firstSample = sampleNames[0];
    console.log(firstSample);

    barChart(firstSample);
    sampleMetadata(firstSample);
    bubbleChart(firstSample);
    });
};
    // Create a function to build horizontal bar chart with Top Ten OTUs
function barChart(sample) {

    // Use D3 to retrieve and filter OTUs for the selected sample
    d3.json(url).then((data) => {
        let OTUsamples = data.samples;
        let resultArray = OTUsamples.filter(sampleObj => sampleObj.id == sample);

        // Get the first result from the array
        let result = resultArray[0];

        // Get the OTU ids, labels, and values for the selected sample and log into console
        let otu_ids = result.otu_ids;
        let otu_labels = result.otu_labels;
        let sample_values = result.sample_values;
        console.log(otu_ids, otu_labels, sample_values);
            
        // Slice the first 10 objects for plotting
        let topTenOTU = otu_ids.slice(0, 10).map(id => `OTU ${id}`).reverse();
        let topTenLabel = otu_labels.slice(0, 10).reverse();
        let topTenValue = sample_values.slice(0, 10).reverse();
        console.log(topTenOTU, topTenLabel, topTenValue);

        // Create trace for horizontal bar chart
        let trace = {
            x: topTenValue,
            y: topTenOTU,
            text: topTenLabel,
            type: "bar",
            orientation: "h"
        };

        // Create Layout
        let layout = {
            title: "Top Ten OTUs",

        };

        // Plot the chart to a div tag with id "bar"
        Plotly.newPlot("bar", [trace], layout);
    });
};

// Create a function to display the sample metadata
function sampleMetadata(sample) {

    // Use D3 to retrieve and filter metadata for the selected sample
    d3.json(url).then((data) => {
        let metadata = data.metadata;
        let resultArray = metadata.filter(sampleObj => sampleObj.id == sample);

        // Log the result to the console
        console.log(resultArray);
        // Get the first result from the array
        let result = resultArray[0];
        

        // Clear any existing metadata
        d3.select("#sample-metadata").html("");

        // Use Object.entries to add each key and value pair to the panel
        Object.entries(result).forEach(([key, value]) => {

            console.log(key, value);

            d3.select("#sample-metadata").append("h5").text(`${key}: ${value}`);
        });
    });
};

    // Create a function to build bubble chart
    function bubbleChart(sample) {

        // Use D3 to retrieve and filter metadata for the selected sample
        d3.json(url).then((data) => {
            let OTUsamples = data.samples;
            let resultArray = OTUsamples.filter(sampleObj => sampleObj.id == sample);
    
            // Get the first result from the array
            let result = resultArray[0];
    
            // Get the OTU ids, labels, and values for the selected sample and log into console
            let otu_ids = result.otu_ids;
            let otu_labels = result.otu_labels;
            let sample_values = result.sample_values;
            console.log(otu_ids, otu_labels, sample_values);

            // Create trace for bubble chart
            let trace1 = {
                x: otu_ids,
                y: sample_values,
                text: otu_labels,
                mode: "markers",
                marker: {
                    size: sample_values,
                    color: otu_ids,
                    colorscale: "Earth"
                    
                }
            };
                // Create Layout
                let layout = {
                    title: "OTUs Per ID",
                    yaxis: {title: "Sample Values"},
                    margin: {t: 50,
                        l: 65,
                        r: 65,
                        b: 30
                    }
                };

                // Plot the chart to a div tag with id "bubble"
                Plotly.newPlot("bubble", [trace1], layout);
            });
};

    // Create a function to update the charts when a new sample is selected
    function optionChanged(value) {

        console.log(value);

        barChart(value);
        sampleMetadata(value);
        bubbleChart(value);
    };




init();