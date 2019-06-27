# Lambda functions

The functions folder contains Netlify Lambda functions that are used instead of Express (cotained in the api folder) functions on Netlify. These functions get called from the store.

Lambda functions are built using: 
    "build:lambda": "netlify-lambda build functions"

This will create a Lambda folder and build the functions in there.

Lamda functions are started using: 
    "start:lambda": "netlify-lambda serve functions"

They will run on port 9000.

The Netlify build command is:
    "prod": "npm run generate && npm run build:lambda",