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



