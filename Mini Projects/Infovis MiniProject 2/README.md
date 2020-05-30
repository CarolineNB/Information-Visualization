# MiniProject Time: Graph Design (Time)

## Overview
Given the data structure and analytical questions presented below, your goal is to come up with effective visualization designs to answer the questions posed and to communicate their answers found in the data. The format of submissino will be a website using HTML, CSS, and D3 + JavaScript. 


## Data
In the [AidData dataset](https://www.aiddata.org/data/aiddata-core-research-release-level-1-3-1), each row represents a financial transaction between two countries. We will be focusing on the following attributes of the dataset:

* **Year**: year of the commitment
* **Donor**: country providing the financial resource
* **Recipient**: country or organization receiving the money
* **Commitment Amount**: the total amount of financial resources provided
* **Coalesced Purpose Name**: the purpose of the transaction
* ...

## Running the code

Run one of the following commands in this directory:

```bash
# For Python 3:
python -m http.server

# For Python 2:
python -m SimpleHTTPServer
```

You can then go to http://localhost:8000 in your browser. See [How do you set up a local testing server?](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/set_up_a_local_testing_server) for more.

## Problems and Created Solution
Problem Questions | Visualization
------------ | -------------
 a) How does the amount donated vs. amount received change over time for each country?; b) Are there countries that mostly send or mostly receive and countries that have a similar amount of donations they receive and send?; c) Are there countries that change their role over time? That is, they used to mostly send donations and turn into mostly receiving donations and vice-versa?; d) Are there countries in which you can find a sudden increase ("peak") or a sudden decrease ("valley")? | ![problem1](https://github.com/CarolineNB/InformationVisualization/blob/master/Mini%20Projects/Infovis%20MiniProject%202/demos/Capture.PNG)
Focus on the top 10 “Coalesced Purposes” of donations (in terms of amount of disbursement across all countries and all time). What are the top 10 purposes of disbursements (in terms of total amount of disbursement) and how does their relative amount compare over time? E.g., are there purposes that tend to be prominent for a period of time and others that become more prominent during other periods? | ![Problem2](https://github.com/CarolineNB/InformationVisualization/blob/master/Mini%20Projects/Infovis%20MiniProject%202/demos/Capture2.PNG)
Focusing exclusively on countries that receive donations, how do donations shift geographically over time? Do donations tend to be always in the same regions of the world over the years or they have been shifting over time? Can you build a visualization that shows the “history of donations” so that one can get a sense of which regions of the world have had more need for donations over the years?| ![Problem2](https://github.com/CarolineNB/InformationVisualization/blob/master/Mini%20Projects/Infovis%20MiniProject%202/demos/Capture3.PNG)
