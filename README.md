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