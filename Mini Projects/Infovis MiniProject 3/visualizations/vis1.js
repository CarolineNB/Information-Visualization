function vis1(data, div) {
  const margin = {top: 30, right: 50, bottom: 90, left: 55};
  const visWidth = 1100 - margin.left - margin.right;
  
  const x_elements = d3.set(data.map(function( item ) { return item.recipient; } )).values();

  const x = d3.scaleBand()
      .domain(x_elements)
      .range([0, visWidth])
      //.padding(0.05);
  
   
  const visHeight = x.step() * 5;
  
  //const extent = d3.extent(data, d => d.value);

  //console.log(extent)
  const extent = [1568, 488300000]
  // const color = d3.scaleDiverging()
  //     .domain(extent)
  //     .interpolator(d3.interpolateRdBu);
  const color = d3.scaleSequential()
      .domain(extent)
      .interpolator(d3.interpolateYlGn)
        
  const svg = div.append("svg")
      .attr("width", visWidth + margin.left + margin.right)
      .attr("height", visHeight + margin.top + margin.bottom)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
  
  const g = svg.append('g')
      .attr('transform', `translate(${margin.left}, ${margin.top})`);
  
  const y_elements = d3.set(data.map(function( item ) { return item.donor; } )).values();
  
  

  const y = d3.scaleBand()
      .domain(y_elements)
      .range([0, visHeight])
      //.padding(0.05)
  
  g.append('text')
      .attr('class', 'title')
      .attr('x', visWidth/2)
      .attr('y', -30)
      .attr('font-size', 10)
      .text('Recievers');
  // day of week labels
  
  const yAxis = d3.axisLeft(y)
      .tickPadding(8)
      .tickSize(0);
  
  g.append('g')
      .call(yAxis)
      .call(g => g.selectAll('.domain').remove());
  
  // month labels
    
  g.selectAll('.month')
    .data(data)
    .join('text')
      .attr('class', 'Country')
      .attr('font-size', 8)
      .attr('x', d => x(d.recipient))
      .attr('y', -5)
      .text(d => d.recipient)
  
  // squares

  g.selectAll('rect')
    .data(data)
    .join('rect')
      .attr('x', d => x(d.recipient))
      .attr('y', d => y(d.donor))
      .attr('width', x.bandwidth())
      .attr('height', y.bandwidth())
      .attr('fill', d => color(d.value))
}