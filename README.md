# Belly-Button-Challenge

In this challenge we are tasked with developing a static webpage with an interactive dashboard to explore biodiversity within belly buttons. To start this we must import necessary data provided from [robdunnlab.com](http://robdunnlab.com/projects/belly-button-biodiversity/)

The dashboard setup is controlled by a dropdown for Subject Test ID's. Once a Test ID has been been selected the data will be filtered to provide the following information:

## 1. Demographic Information
This section provides information on the selected subject such as age, ethnicity, gender, location, belly-button type, wash frequency, and sample ID number.

## 2. Top Ten OTUs Bar Graph
This section displays the ten most abundant Operational Taxonomic Units (OTUs) found in the subject's belly button. The y-axis represents the OTU IDs, while the x-axis represents the OTU sample values.

## 3. Bubble Chart of OTUs
This section displays all OTUs found in the selected test subject. Each bubble represents an OTU while the bubble size represents the size of the sample value. The x-axis represents the OTU ID while the y- axis represents the sample values. 

## 4. Subject Washing Frequency Gauge Chart
This section displays the frequency at which the subject washes their belly button. This gauge chart provides an indication of personal hygiene practices, with the value ranging from 0 to 9. A higher value implies a higher frequency of washing.

For more information please visit the webpage [here](https://rstevens318.github.io/belly-button-challenege/)!


## Technologies and Tools
- HTML
- CSS
- D3.js
- Plotly.js