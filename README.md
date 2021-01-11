# Front End Developer Task

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Online Demo

Click [here](https://alexjnshi.github.io/ab_react_project/#/)

## Quick Start

```node
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

This project only has two pages(no 404). All magics happened in landing page

### Landing page -products index.js

- Add mobile responsive
- UseEffect to check filter state and page numbers in Sessionlstorage, if they are exist go to that page, if not fetch 100 products data
- Use redux & redux-thunk to control loading state, when loading data, show loading animation.
- When data has been fetched, it will automatically generate categories, only show 6 at top of the page.
- When user clicks categories filters, it should make a request with clicked category, respond 100 results, then recalculate new 6 categories that are shown on the page.
- For pagination, I use "cheaper way" to do it, sort data in client side, instead to request from the server

### Detail page -detail index.js

- Have logic to get all product categories' name, but looks have an issue with API `/categories?id:in=`. Did not figure it out.

## Updates

### Update on 9th Dec 2020

- `/products?categories=2874` is Members-only category, I think it will show depends on log-in state. For this task, this certain category should be removed from categories array.
- Find couple small issues may affect UX, listed blow:
  - When click category filters the data is not showing from first if you are browsing data not in first page before you click filter, but pagination is moving to 1. This may lead to a bug that if new data is not long enough the table and pagination will be shown without data
    ```
        e.g. You current in page 2 for 'default category' data, 
        then you click 'search by concern', the pagination move to 1, 
        but data for 'search by concern' will show from page 2.
        it will be recovered by click pagination again
    ```
    - When moving to product detail page, the categories show slow or show previous product categories, then update info suddenly, may could solved by useMemo.
- Not going to update anymore... this is the final version. Thanks for your time.

### Update on 8th Dec 2020

- API `/categories?id:in=` with array fixed
- When go to check certain categories with API `/products?categories=`, there is no data returned. As a result, click some filters may keep showing loading animation.
    ```
        //e.g. 
        "/products?categories=2874"
    ```
- Update detail page categories, can display correctly.

### Update on 7th Dec 2020

- API `/products?categories:in=` works fine, bug fixed
- API `/categories?id=` is OK working with integer, but not working with array[integer]. 
  - For example, `/categories?id:in=`
- Updated request URL formates to avoid null params, as a result, qs is no longer needed.

## Todo

- Automated Unit testing (Jest,enzyme)

- Current using history to jump to the detail page, but it has bugs, when user goes to /detail page dirctlly, will show nothing, but errors. It is better to use NavLink with dynamic params to do this.
