# Graphical Encoding
### Task Description
In this exercise, we have a dataset that contains the unemployment rate for each state for December 2019. Your task is to visualize this data in 5 different ways. This exercise is about exploring possibilities, so it's okay if some of your visualizations aren't the most effective.

### Examples
| Choropleth| Speedometer Chart| 
| :-------------: |:-------------:|
| ![Example 1](https://github.com/CarolineNB/InformationVisualization/blob/master/Exercises/Graphical%20Encoding/demo/Example1.PNG) | ![Example 2](https://github.com/CarolineNB/InformationVisualization/blob/master/Exercises/Graphical%20Encoding/demo/Example2.PNG) | 

### Created Solutions
| Radial Map | Bar Graph | Radial Grid |
| :-------------: |:-------------:|:-------------:| 
| ![Problem 1](https://github.com/CarolineNB/InformationVisualization/blob/master/Exercises/Graphical%20Encoding/demo/Problem1.PNG) | ![Problem 2](https://github.com/CarolineNB/InformationVisualization/blob/master/Exercises/Graphical%20Encoding/demo/Problem2.PNG) | ![Problem 3](https://github.com/CarolineNB/InformationVisualization/blob/master/Exercises/Graphical%20Encoding/demo/Problem3.PNG) |
| **Diverging Color Map**| **Bubble Chart**|
| ![Problem 4](https://github.com/CarolineNB/InformationVisualization/blob/master/Exercises/Graphical%20Encoding/demo/Problem4.PNG) | ![Problem 5](https://github.com/CarolineNB/InformationVisualization/blob/master/Exercises/Graphical%20Encoding/demo/Problem5.PNG) | ![Problem 6](https://github.com/CarolineNB/InformationVisualization/blob/master/Exercises/Graphical%20Encoding/demo/Problem6.PNG) | 

## Running the Exercise
The link of raw code is: https://observablehq.com/d/df2efcd7f56134aa

View this notebook in your browser by running a web server in this folder. For example:

`python -m SimpleHTTPServer`

Or, use the Observable Runtime to import this module directly into your application. To npm install:

```
npm install @observablehq/runtime@4
npm install https://api.observablehq.com/d/df2efcd7f56134aa.tgz?v=3
```
Then, import your notebook and the runtime as:
```
import {Runtime, Inspector} from "@observablehq/runtime";
import define from "df2efcd7f56134aa";
```

To log the value of the cell named “foo”:
```
const runtime = new Runtime();
const main = runtime.module(define);
main.value("foo").then(value => console.log(value));
```
