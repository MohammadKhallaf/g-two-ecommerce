# ECommerce App

# Bootstrap

- Setup
  0- stop react server
  1- `npm install react-bootstrap bootstrap` 
  2- `import 'bootstrap/dist/css/bootstrap.min.css';` in `index.js` file
  3- run react server

# Steps 
1- get the navbar component and card component
2- split the components
  - components/CustomNavbar
  - components/ProductCard

# Notes
- Component Naming -> PascalCase
- Cannot export **default** 2 function in the same file.
```jsx
function ComponentName(){
  return()
}
export default ComponentName;
```
OR
```jsx
const ComponentName = ()=>{
  return()
}
export default ComponentName;
```
```jsx
export const ComponentName = ()=>{

  return()
}
import {ComponentName} from './path'
```

# Router implementation
1- install `npm i react-router-dom`
2- wrap with Provider `<BrowserRouter/>`
3- Wrap within `<Routes></Routes> `
4- use `<Route path element /> ` to define the route 

# imports states...
import ProductCard from **"../components/ProductCard"**

3 type  :
- **"react-bootstrap/Col"** : import from library
- **"./pages/ProductList"** --> **'./'** -> relative path
- **"../components/ProductCard"** -> **'../'** -> relative path

access the current folder `.`
up one level up | `..`


src:
- components folder
  - ProductCard.jsx
- pages folder
  - ProductList.jsx 
- App.js
- index.js


--- 

# 9 Sept.
- cart page
  - navigation to card
  - Bootstrap -> as={External Library}
- add products to the cart page
- refines

## 1. create cart page
1. create a file 
2. create a function inside the file and name it to the component name
   Start with Upper Case
3. export 
4. import @ file I want to use the component in

## 2. add products to the cart page
guest -> (JS) -> |<>->[]| local storage **(persist)**



## Today research
- reconciliation in react
- mutation in react


## Today task
1- issue at the counter of the product qty []
2- add wishlist ( same functionality of the cart )
3- implement remove from cart
4- implement remove from wishlist 

--------------------------------------------------------|

## Bonus
-> preserve the state (using local storage)
-> update qty from within the cart 
-> prevent adding the product more than one time to the wishlist