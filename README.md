# Pivot Table

> Pivot table component that allows user to view sales of various states. Displays subtotal ,total and grand total of sales for various states.


## Table of contents
* [Description](#description)
* [Live Demo](#live-demo)
* [Screenshot](#screenshot)
* [Technologies](#technologies)
* [Architectural Overview](#architectural-overview)
* [Setup](#setup)
* [Assumptions](#assumptions)
* [Recommendations](#recommendations)
* [App Info](#app-info)



## Description

A pivot table is a table of grouped values that aggregates the individual items of a more extensive table within one or more discrete categories.
This summary might include sums, averages, or other statistics, which the pivot table groups together using a chosen aggregation function applied to the grouped values.
When working with pivot tables, we generally speak of two types of fields:
1. Dimensions - fields that represent the rows and / or columns of the table (e.g Product
Category)
2. Metrics - fields that are in the cells of the pivot table and can be aggregated (Sales,
Quantity, Profit)
The Pivot table component below displays subtotal of various subcategories for each state, total sales for all subcategories(sum of all subtotal for a given state) and grand total(sum of all totals for a given state).
In this case “Category” and
“Sub-category” are row dimensions, “State” is a column dimension and “Sales” is the metric
value.



## Live Demo
Here is a working live demo : [live](https://pivottable-2f0fa.web.app/) 



## Screenshot
![screencapture-localhost-3000-2021-08-23-15_11_54](https://user-images.githubusercontent.com/31744209/130450842-76099ad8-d216-45ee-be6c-4f40e7cfd37e.png)


## Technologies
* Technologies used for this application:
  * `React` 17.0 - for displaying UI components
  * `HTML5 & CSS3` 17.0 - for markup and stylesheet language
  * `Redux` 4.1 -  predictable state container for managing application state
  * `Typescript` 3.1 - typed superset of javascript that compiles to plain javascript 
  * `Express` 4.1 - middleware is used to handle requests, routes
  * `Jest` 20.0 - testing framework for Javascript codebase, specifically React for this application.
  * `Enzyme` 2.9 - JavaScript Testing utility for React that makes it easier to test your React Components' output.


## Architectural Overview
   The application logic is contained in `src` subfolder.
   Within  `src` subfolder are the following sections:
   
   `actions`  - contains all action objects dispatched to redux store
   
   `components`  - contains all the components rendered for this application namely:
   
                     * Cell.tsx __displays metric and value received
                     
                     * Header.tsx __displays the header of the pivot table.
                                    renders titles and displays all states horizontally
                                    
                     * Row.tsx __loops through all categories and renders RowItem component for each loop
                                 Displays grand-total for each state
                                 
                     * RowItem.tsx __  outputs category, subcategories, sutotal and total
                     
                     * PivotTable.tsx __  parent component for this application         
                     
                                 
                                 
   
   
   
   `reducers`  - defines application redux logic. The application state
                 is defined within this subfolder.
                 All sales data is stored in sales.ts reducer
                 
   `selectors`  - contains helper functions used for various computations namely:
   
                   * states.ts- includes:
                                 selectStates() __given the sales as argument , it finds all distinct states and returns 
                                                states sorted alphabetically
                                                
                   * categories.ts- includes:
                                     getCategories() __given sales as argument , returns all distinct categories sorted alphabetically
                                     
                                     getSubCategories() __receives category and sales as argument, returns all subcategories belonging to a given category
                                                           sorted alphabetically
                                     getSubTotal() __receives subcategory, state and sales, computes the subtotal of all sales for a given subcategory belonging to a   
                                                      particular state
                                                      
                                     getTotal() __ receives  state, category and sales, computes the total of all subtotal belonging to a given category and state and returns.
                                     
                                     getGrandTotal() __ given state and sales , returns the SUM of all sales belonging to a particular state.
                                  
                 
                 
   
   `styles`  - contains all the stylesheet for our components
   
   `tests`  - contains the test suites for our application.
                 Snapshot rendering is done for components and all component snapshots are saved in `_snapshots_`  subfolder.
              
   `App.tsx`  - Renders our application .Contains redux store configuration and dispatches action object to store sales data in redux.
   
   `data.json`  - includes sales data . The sales data is embedded.
   
   
   `type.d.ts`  - this file containes typescript types that are reused within application.
                   Allows one to reuse types without importing.
   
              
   `setUpTests.ts`  - includes configuration for setting up test environment using jest and enzyme.
              

 
 ## Setup
 To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer.
 
 
 
###  Clone repo
Run the following scripts in the terminal to clone the repo
```
$ git clone git@github.com:jamesmogambi/pinhole-press-test.git
$ cd pinhole-press-test
```

----------------------------------


### Install  dependencies
This command will install all dependecies used by this application.
The dependecies are listed in `package.json`  file.


```bash
npm install
```


### Run App
In the project directory, you can run:

```bash
npm run start
```
Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser
The page will reload if you make edits.<br>
You will also see any lint errors in the console.


### Run Tests
```bash
npm run test --watchAll
```
Launches the test runner in the interactive watch mode.<br>


### Build for production

```bash
npm run build
```

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Assumptions
  While developing this application the following assumptions were made:
  
  
  * The sales data is currently embedded within the application instead of fetching
   from a remote API.
     
 
 
  ## Recommendations
  
    
   To do list:
   * Add search function. This will allow user to retrieve data quickly based on search parameter.
   * Implement filter. Allow user to filter data based on filter parameters e.g category, subcategory
     Will allow user to retrieve data quickly since pivot table handles large data.
   
   
   * Implement dark mode ,this will allow user to switch between dark and light mode based on user like.





## App Info

### Author


[James Mogambi](https://github.com/jamesmogambi)

### Version

1.0.0

