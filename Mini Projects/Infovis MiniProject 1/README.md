# MiniProject One: Graph Design (Geo)

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
How do the countries compare in terms of how much they receive and donate from other countries? Are there countries that donate much more than they receive or receive much more than they donate? | ![problem1](https://github.com/CarolineNB/InformationVisualization/blob/master/Mini%20Projects/Infovis%20MiniProject%201/demo/Capture.PNG)
Do the countries that mostly receive or mostly donate tend to cluster around specific geographical areas of the world? Are there neighboring countries that have radically different patterns in terms of how much they receive vs. how much they donate? | ![Problem2](https://github.com/CarolineNB/InformationVisualization/blob/master/Mini%20Projects/Infovis%20MiniProject%201/demo/Capture2.PNG)
