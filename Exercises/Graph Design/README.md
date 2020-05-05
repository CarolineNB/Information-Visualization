# CS-GY 6313 Information Visualization
## Task
In this exercise, we will be working data derived from the NYC Restaurant Inspection Results dataset.
For each problem below, create a visualization using D3 that provides an answer to the questions. Format of responses should be in an Observable Notebook (original notebook is linked [here](https://observablehq.com/d/7195b89321e7c59d)).

## Exercise
| Problem | Created Solution | 
| :-------------: |:-------------:|
| What is the distribution of grades over cuisine descriptions? Which cuisise descriptions have the best/worst distribution? | ![Problem 1](https://github.com/CarolineNB/InformationVisualization/blob/master/Exercises/Graph%20Design/demos/Problem1.PNG) | 
| How do the number of inspections change over time for each borough? Use month as the level of temporal granularity. | ![Problem 2](https://github.com/CarolineNB/InformationVisualization/blob/master/Exercises/Graph%20Design/demos/Problem2.PNG) | 
| Is there a relationship between cuisine type and violation? Do some cuisine types have uique violations that differ from the others? | ![Problem 3](https://github.com/CarolineNB/InformationVisualization/blob/master/Exercises/Graph%20Design/demos/Problem3.PNG) | 

## Running the Exercise
The link of raw code is: https://observablehq.com/d/7195b89321e7c59d

View this notebook in your browser by running a web server in this folder. For example:

`python -m SimpleHTTPServer`

Or, use the Observable Runtime to import this module directly into your application. To npm install:

```
npm install @observablehq/runtime@4
npm install https://api.observablehq.com/d/7195b89321e7c59d.tgz?v=3
```
Then, import your notebook and the runtime as:
```
import {Runtime, Inspector} from "@observablehq/runtime";
import define from "7195b89321e7c59d";
```

To log the value of the cell named “foo”:
```
const runtime = new Runtime();
const main = runtime.module(define);
main.value("foo").then(value => console.log(value));
```
