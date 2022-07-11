# BMI Calculator 

The BMI Calculator is built using NodeJS Framework. This also take care of the scenario where the input json has millions of rows for scaliblity aspect.


## Technologies used
- NodeJs
- JSON


## Features
- Calculates the BMIs.
- Adds information about BMI Category
- Also adds information about Health risk asscoiated with BMI
- Scalable for large input loads

## Implementation Logic 


-  Load the data using read stream object by object instead of loading the entire input into the memory
- Now for every object calculate the BMI,BMI Category and Health risk associated with it.
- After computing the above attributes, spread the current object details with current calcuated values and append this object to the output.json


## Prerequisite to run the project
- Have Nodejs installed 
- A input json file

## Steps to run this project:

1. Run `npm install` command
2. Run `npm start` command

##### The `output.json` is the final output file
