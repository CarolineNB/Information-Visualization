// Load the datasets and call the functions to make the visualizations

Promise.all([
  d3.csv('data/MiniProject2Vis1.csv', d3.autoType),
  d3.csv('data/MiniProject2Vis2.csv', d3.autoType),
  d3.csv('data/MiniProject2Vis3.csv', d3.autoType),
  d3.csv('data/MiniProject2Vis3Pt2.csv', d3.autoType),
  d3.csv('data/MiniProject2Vis3Pt3.csv', d3.autoType),
  d3.csv('data/MiniProject2Vis3Pt4.csv', d3.autoType),
  d3.json('data/countries.json')
]).then(([data1, data2, data3, data3b, data3c, data3d, geoJSON]) => {
  vis1(data1, d3.select('#vis1'));
  vis2(data2, d3.select('#vis2'));
  legend(data2, d3.select('#vis2legend'));
  vis3(data3, geoJSON, d3.select('#vis3'));
  vis3b(data3b, geoJSON, d3.select('#vis3b'));
  vis3c(data3c, geoJSON, d3.select('#vis3c'));
  vis3d(data3d, geoJSON, d3.select('#vis3d'));
});
