function vis2(data, div) {
  const dat = d3.rollup(data,
    inspection => d3.sum(inspection, c=> c.amount),
    d => d.code,
    d => d.year);
  
  const codeData = Array.from(dat, ([code, year]) => ({
    code: code,
    counts: Array.from(year, ([year, amount]) => ({
      year, amount}))
  }));
  
  const color = d3.scaleOrdinal()
    .domain([21050, 21030, 32120, 60040, 23020, 53030, 16010, 52010, 14020, 22020])
    .range(d3.schemeTableau10)

  const margin = {top: 30, right: 50, bottom: 90, left: 39};
  const visWidth = 1080 - margin.left - margin.right;
  const visHeight = 500 - margin.top - margin.bottom;
  

  const svg = div.append("svg")
      .attr("width", visWidth + margin.left + margin.right)
      .attr("height", visHeight + margin.top + margin.bottom)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  const g = svg.append('g')
      .attr('transform', `translate(${margin.left}, ${margin.top})`);
  
  // add title
  g.append("text")
    .attr("x", visWidth / 2)
    .attr("y", -margin.top)
    .attr("text-anchor", "middle")
    .attr("dominant-baseline", "hanging")
    .attr("font-family", "sans-serif")
    .attr("font-size", "16px")
    .text("USD Amount of Coalesced Purpose Donated from 1973-2013");
  
  const years = [1973,
    1974, 1975, 1976, 1977, 1978, 1979, 1980, 1981, 1982, 1983, 1984, 1985,
    1986, 1987, 1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997,
    1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009,
    2010, 2011, 2012, 2013]

  const x = d3.scalePoint()
      .domain(years)
      .range([0, visWidth]);
  
  const y = d3.scaleLinear()
      .domain([0, 8344866729.0]).nice()
      .range([visHeight, 0]);
  
  const xAxis = d3.axisBottom(x);//.tickFormat(d3.timeFormat('%B'))
  const yAxis = d3.axisLeft(y);
  
  g.append("g")
      .attr("transform", `translate(0, ${visHeight})`)
      .call(xAxis)
    .append("text")
      .attr("x", visWidth / 2)
      .attr("y", 40)
      .attr("fill", "black")
      .attr("text-anchor", "middle")
      .text("Year");
  
  g.append('g')
      .call(yAxis)
    .append('text')
      .attr('text-anchor', 'start')
      .attr('dominant-baseline', 'middle')
      .attr('fill', 'black')
      .attr('x', 10)
      .text('USD Amount');
    
  const line = d3.line()
      .x(d => x(d.year))
      .y(d => y(d.amount));
  
  const series = g.selectAll('.series')
    .data(codeData)
    .join('g')
      .attr('stroke', d => color(d.code))
      .attr('class', 'series')
    .append('path')
      .datum(d => d.counts)
      .attr('fill', 'none')
      .attr('stroke-width', .7)
      .attr('d', line);
  
  return svg.node();
}

function legend(data, div) {
  const top_codes = [
  'Import support (capital goods)',
  'Industrial development',
  'Power generation/non-renewable sources',
  'Rail transport',
  'Telecommunications',
  'Air transport',
  'Mineral/Metal prospection and exploration',
  'Power generation/renewable sources',
  'Social/ welfare services',
  'RESCHEDULING AND REFINANCING',]
  const color = d3.scaleOrdinal()
    .domain(top_codes)
    .range(d3.schemeTableau10);

  const size = 10;
  const lineHeight = size * 1.5;
  
  const svg = div.append("svg")
  const rows = svg
    .selectAll("g")
    .data(color.domain())
    .join("g")
      .attr("transform", (d, i) => `translate(0, ${i * lineHeight})`);
  
  rows.append("rect")
      .attr("height", size)
      .attr("width", size)
      .attr("fill", d => color(d));
  
  rows.append("text")
      .attr("font-family", "sans-serif")
      .attr("font-size", 12)
      .attr("dominant-baseline", "hanging")
      .attr("x", lineHeight)
      .text(d => d);
  
  return svg.node();
}