# Front End Developer Task 

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Online Demo
Click [here](https://alexjnshi.github.io/ab_react_project/#/)

## Quick Start
```
    $ git clone https://github.com/AlexJnshi/ab_react_project.git
    $ cd ab_react_project

    $ npm i

    $ npm start
```

## Project Structure

```
src/
├── common/ # all static files and reuseable componts
│   ├──components/
│   ├──css/
│   └──images/
├── router/ 
├── store/ # redux
│   ├──actions/
│   └──reducers/
├── view/ 
│   └──details/ # product details
│   └──products/ # product list 
├── App.js
└── index.js
```

## Logics and Problems
This project only have two pages. All magics happened in landing page
### Landing page -Products index.js
- Add mobile responsive
- Before page render, check fliter state and page numbers in Sessionlstorage, if they are exist go that page, if not featch new data wich Categories=0 "all" with 100 products data

- Use redux & redux-thunk to control loading state, when loading data,show loading animation.

- When data has been fetched, it will automatically generate categories, only show 6 at top of page.

- When user click categories filters, it should make a request with clicked category, respond 100 results, then recalculate new 6 categories that are shown on the page.
Unfortunately, I did not success made that request, the api always back the same results.
    -  The API is ```/product?categories:in= category numbers``` or ```/product?categorie=category number``` 
    - As a result, The filter function not working and I could not to store filter state in Sessionlstorage.

- For pagination, I use "cheaper way" to do it, sort data in client side,instead to request from server
