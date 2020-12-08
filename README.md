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

## Logic and Problems
This project only has two pages(no 404). All magics happened in landing 

### Update on 8th Dec 2020
- API `/categories?id:in=` with array fixed
- When go to check certain categories with API `/products?categories=`, there is no data returned. As a result, click some filters may keep showing loading animation.
    ```jsx
        //e.g. 
        "/products?categories=2874"
    ```
- Update detail page categories, can display correctly.


### Update on 7th Dec 2020
- API `/products?categories:in= ` works fine, bug fixed
- API `/categories?id=` is OK working with integer, but not working with array[integer]. 
    - For example, `/categories?id:in=`
- Updated request URL formates to avoid null params, as a result, qs is no longer needed.


### Landing page -products index.js
- Add mobile responsive
- UseEffect to check filter state and page numbers in Sessionlstorage, if they are exist go to that page, if not fetch new data wich Categories=0 "all" with 100 products data

- Use redux & redux-thunk to control loading state, when loading data, show loading animation.

- When data has been fetched, it will automatically generate categories, only show 6 at top of the page.

- When user clicks categories filters, it should make a request with clicked category, respond 100 results, then recalculate new 6 categories that are shown on the page.
Unfortunately, I did not success made that request, the api always back the same results.
    -  The API is `/product?categories:in= category numbers` or `/product?categorie=category number` 
    - As a result, The filter function not working and I could not store filter state in Sessionlstorage.

- For pagination, I use "cheaper way" to do it, sort data in client side, instead to request from the server


### Detail page -detail index.js
- Have logic to get all product categories' name, but looks have an issue with API `/categories?id:in=`. Did not figure it out.


## Todo
- Current using history to jump to the detail page, but it has bugs, when user goes to /detail page dirctlly, will show nothing, but errors. It is better to use NavLink with dynamic params to do this.