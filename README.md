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
This project only have two pages(no 404). All magics happened in landing 

### Update on 8th Dec 2020
- API `/categories?id:in=` with array fixed
- When go to check certain id with API `/categories?id=`, it will return 'too many data'. It still happen when add limit. As a result, in the front end, some filters may not work or keep showing loading animation.


### Update on 7th Dec 2020
- API `/products?categories:in= ` works fine, bug fixed
- API `/categories?id=` is OK working with integer, but not working with array[integer]. 
    - For example, `/categories?id:in=`
- Updated request URL formates to avoid null params,as a result qs is no longer needed.


### Landing page -products index.js
- Add mobile responsive
- UseEffect to check fliter state and page numbers in Sessionlstorage, if they are exist go that page, if not featch new data wich Categories=0 "all" with 100 products data

- Use redux & redux-thunk to control loading state, when loading data,show loading animation.

- When data has been fetched, it will automatically generate categories, only show 6 at top of page.

- When user click categories filters, it should make a request with clicked category, respond 100 results, then recalculate new 6 categories that are shown on the page.
Unfortunately, I did not success made that request, the api always back the same results.
    -  The API is `/product?categories:in= category numbers` or `/product?categorie=category number` 
    - As a result, The filter function not working and I could not to store filter state in Sessionlstorage.

- For pagination, I use "cheaper way" to do it, sort data in client side,instead to request from server


### Detail page -detail index.js
- Have logic to get all product categories' name, but looks have a issue with API `/categories?id:in=`. Did not figure it out.


## Todo
- Current using history to jump to detail page, but it has bugs, when user go to /detail page, will show nothing, but errors. It is better to use NavLink with dynamic params to do this.