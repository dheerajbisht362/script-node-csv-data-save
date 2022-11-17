# script-node-csv-data-save

## Technology used
  - axios : "^1.1.3"
  - csv : "^6.2.2"

## Feature
  1. Make api-call to Database
  2. Store data into csv with required parameters
  
## How to run the project
  1. Clone the repo and do npm install
       $ git clone https://github.com/dheerajbisht362/script-node-csv-data-save.git
       $ npm i
  2. Transpile typescript files 
       $ tsc -w
  3. Start the scipt 
       $ node dist/server "${Query Address}" {$PageSize}
  4. Stript will start and result will be stored in saved_data_from_api.csv
