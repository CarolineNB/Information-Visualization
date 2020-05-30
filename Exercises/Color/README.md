# Graphical Encoding
### Task Description

### Created Solutions
| Black and White| Colored | 
| :-------------: |:-------------:|
| ![Problem 1b](https://github.com/CarolineNB/InformationVisualization/blob/master/Exercises/Color/demo/Problem1b.PNG) | ![Problem 1](https://github.com/CarolineNB/InformationVisualization/blob/master/Exercises/Color/demo/Problem1.PNG) | 
| ![Problem 2b](https://github.com/CarolineNB/InformationVisualization/blob/master/Exercises/Color/demo/Problem2b.PNG) | ![Problem 2](https://github.com/CarolineNB/InformationVisualization/blob/master/Exercises/Color/demo/Problem2.PNG) | 
| ![Problem 3b](https://github.com/CarolineNB/InformationVisualization/blob/master/Exercises/Color/demo/Problem3b.PNG) | ![Problem 3](https://github.com/CarolineNB/InformationVisualization/blob/master/Exercises/Color/demo/Problem3.PNG) | 
| ![Problem 4b](https://github.com/CarolineNB/InformationVisualization/blob/master/Exercises/Color/demo/Problem3b.PNG) | ![Problem 4](https://github.com/CarolineNB/InformationVisualization/blob/master/Exercises/Color/demo/Problem4.PNG) | 
| ![Problem 5b](https://github.com/CarolineNB/InformationVisualization/blob/master/Exercises/Color/demo/Problem5b.PNG) | ![Problem 5](https://github.com/CarolineNB/InformationVisualization/blob/master/Exercises/Color/demo/Problem5.PNG) | 
| ![Problem 6b](https://github.com/CarolineNB/InformationVisualization/blob/master/Exercises/Color/demo/Problem6b.PNG) | ![Problem 6](https://github.com/CarolineNB/InformationVisualization/blob/master/Exercises/Color/demo/Problem6.PNG) | 

## Running the Exercise
The link of raw code is: https://observablehq.com/d/7195b89321e7c59d

View this notebook in your browser by running a web server in this folder. For example:

`python -m SimpleHTTPServer`

Or, use the Observable Runtime to import this module directly into your application. To npm install:

```
npm install @observablehq/runtime@4
npm install https://api.observablehq.com/d/19d7c1b295c54a77.tgz?v=3
```
Then, import your notebook and the runtime as:
```
import {Runtime, Inspector} from "@observablehq/runtime";
import define from "19d7c1b295c54a77";
```

To log the value of the cell named “foo”:
```
const runtime = new Runtime();
const main = runtime.module(define);
main.value("foo").then(value => console.log(value));
```
