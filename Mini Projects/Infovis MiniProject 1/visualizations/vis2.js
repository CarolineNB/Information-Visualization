function vis2(data, geoJSON, div) {
  transform = Object.fromEntries(new Map(data.map(d => [d.country, d.ratio])))
  console.log(transform)
  const margin = {top: 20, right: 20, bottom: 20, left: 20};

  const visWidth = 900 - margin.left - margin.right;
  const visHeight = 600 - margin.top - margin.bottom;

  extent = d3.extent(data, d => d.ratio)

  console.log(extent)
  var color = d3.scaleSequential()
    .domain(extent)
    .interpolator(d3.interpolateRdYlBu)
    
  const svg = div.append('svg')
      .attr('width', visWidth + margin.left + margin.right)
      .attr('height', visHeight + margin.top + margin.bottom);

  const g = svg.append('g')
    .attr('transform', `translate(${margin.left}, ${margin.top})`);

  const projection =  d3.geoEqualEarth()
      .fitSize([visWidth, visHeight], geoJSON);

  const path = d3.geoPath().projection(projection);



  
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

