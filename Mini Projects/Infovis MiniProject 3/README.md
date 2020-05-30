# MiniProject Time: Graph Design (Networks)

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
Create an overview of the relationships between countries so that it is possible to see who donates to whom and how much. The main question one should be able to answer is: who are the major donors and to which countries do they donate the most and how much? And conversely, who are the major receivers and which countries do they receive from the most and how much? We only care about the top 10 recipients and the top 20 donors over time for this question.
| ![Problem3a](https://github.com/CarolineNB/Information-Visualization/blob/master/Mini%20Projects/Infovis%20MiniProject%203/demos/demo1.PNG)
Considering only the top 5 purposes of donation, how does the relationship between countries look like in terms of purposes? What composition of  purposes do the donations between each pair of countries have? Are there countries that donate to a given country using multiple purposes? Or do counties always donate using one single purpose when donating to another country? The same as the previous question, we only care about the top 10 recipients and the top 20 donors here.
| ![Problem3b](https://github.com/CarolineNB/Information-Visualization/blob/master/Mini%20Projects/Infovis%20MiniProject%203/demos/demo2.PNG)
