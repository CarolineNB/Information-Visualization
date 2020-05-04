function vis3d (data, geoJSON, div) {
    transform = Object.fromEntries(new Map(data.map(d => [d.donor, d.amount])))
    const margin = {top: 20, right: 20, bottom: 20, left: 20};

    const visWidth = 500 - margin.left - margin.right;
    const visHeight = 400 - margin.top - margin.bottom;

    extent = d3.extent(data, d => d.amount)

    var color = d3.scaleSequential()
        .domain([0, 1000000000])
        .interpolator(d3.interpolateYlGnBu)

    const svg = div.append("svg")
        .attr('width', visWidth + margin.left + margin.right)
        .attr('height', visHeight + margin.top + margin.bottom);

    const g = svg.append('g')
    .attr('transform', `translate(${margin.left}, ${margin.top})`);

    const projection =  d3.geoEqualEarth()
        .fitSize([visWidth, visHeight], geoJSON);

    const path = d3.geoPath().projection(projection);

    g.append('text')
        .attr('class', 'title')
        .attr('x', visWidth/2 - 100)
        .attr('y', 30)
        .attr('font-size', 12)
        .text('Amounts Donated 2008-2013');


    g.selectAll('.border')
    .data(geoJSON.features)
    .join('path')
        .attr('class', 'border')
        .attr('d', path)
        .style("fill", function(d) {
            if (transform[d.properties.NAME]){
                check = transform[d.properties.NAME];
            }
            else{
                check = 0;
            };
            if (check == 0) {return "white"}
            else 	{ return color(check) }
        ;})
        .attr('stroke', 'steelblue');

    const mapOutline = d3.geoGraticule().outline();

  
}

