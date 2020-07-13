// **User Story #1:** I can see a title element that has a corresponding id="title".
const container = d3.select('.container')
    .append('h2')
    .attr('id', 'title')
    .text('Doping in Professional Bicycle Racing')


// Create margins
const margin = {
    top: 20,
    right: 20,
    bottom: 20,
    left: 50
}


// create dimentions
const width = 800 - margin.left - margin.right;
const hight = 400 - margin.top - margin.bottom;




// create Canvas
// canvas is the main container for all svg elements
const canvas = container.append('svg')
    .attr('viewBox', `0 0 ${width + margin.left + margin.right} ${hight + margin.top + margin.bottom}`);



// Create Group Container
const group = canvas.append('g')
    .attr('transform', `translate(${margin.left}, ${margin.top})`)




// Create Scales
const xScale = d3.scaleTime()
    .range([0, width]);

const yScale = d3.scaleTime()
    .range([0, hight]);




// Format time properly
const parseTimeRecord = d3.timeParse("%M:%S");
const parseTimeYear = d3.timeParse("%Y");




// Define drawer function
const drawScatterPlot = data => {

    // format data
    data.forEach( item => {
        item["Time"] = parseTimeRecord(item["Time"]);
        item["Year"] = parseTimeYear(item["Year"])
    });

    // define domains for scales
    // d3.extent returns the minimum and maximum values
    xScale.domain(d3.extent( data, d => d["Year"]));
    yScale.domain(d3.extent( data, d => d["Time"]));


    // Create Axes
    const xAxis = d3.axisBottom( xScale )
    const yAxis = d3.axisLeft( yScale )
    .tickFormat(d3.timeFormat("%M:%S"));



    // append xAxis to groups
    group.append('g')
        .attr('id', 'x-axis')
        .attr('transform', `translate(0, ${hight})`)
        .call(xAxis);

    group.append('g')
        .attr('id', 'y-axis')
        .call(yAxis)



    


}



const apiURL = "https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/cyclist-data.json";

fetch( apiURL )
.then( res => res.json())
.then( json => {
    const data = json;

    drawScatterPlot( data );
})