// Load the datasets and call the functions to make the visualizations

Promise.all([
  d3.csv('data/MiniProject2Vis1.csv', d3.autoType),
  d3.csv('data/MiniProject2Vis2a.csv', d3.autoType),
  d3.csv('data/MiniProject2Vis2b.csv', d3.autoType),
  d3.csv('data/MiniProject2Vis2c.csv', d3.autoType),
  d3.csv('data/MiniProject2Vis2d.csv', d3.autoType),
  d3.csv('data/MiniProject2Vis2e.csv', d3.autoType),
  d3.csv('data/MiniProject2Vis2f.csv', d3.autoType),
  d3.csv('data/MiniProject2Vis2g.csv', d3.autoType),
  d3.csv('data/MiniProject2Vis2h.csv', d3.autoType),
  d3.csv('data/MiniProject2Vis2i.csv', d3.autoType),
  d3.csv('data/MiniProject2Vis2j.csv', d3.autoType),
]).then(([data1, data2a, data2b, data2c, data2d, data2e, data2f, data2g, data2h, data2i, data2j]) => {
  //legend1(data2a, d3.select('#vis1legend'));
  vis1(data1, d3.select('#vis1'));
  legend(data2a, d3.select('#vis2legend'));
  vis2a(data2a, d3.select('#vis2a'));
  vis2b(data2b, d3.select('#vis2b'));
  vis2c(data2c, d3.select('#vis2c'));
  vis2d(data2d, d3.select('#vis2d'));
  vis2e(data2e, d3.select('#vis2e'));
  vis2f(data2f, d3.select('#vis2f'));
  vis2g(data2g, d3.select('#vis2g'));
  vis2h(data2h, d3.select('#vis2h'));
  vis2i(data2i, d3.select('#vis2i'));
  vis2j(data2j, d3.select('#vis2j'));
});
