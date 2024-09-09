import { BrowserRouter, Route, Routes } from "react-router-dom";
import CustomNavbar from "./components/CustomNavbar";
import ProductList from "./pages/ProductList";
import CartPage from "./pages/CartPage";
import "./App.css";
import { useState } from "react";
import { CartContext } from "./CartContext";

function App() {
  const [cart, setCart] = useState([]);
  const addToCart = (product) => {
    // prevState === cart state (on the exact previous render)
    setCart((prevState) => {
      // add item to array
      //! prevState.push(product); dont use the original array
      // update the same original array
      //  to update state -> should return a new array
      // --------------------------------------------------- //

      //1. check if the product is already in the cart
      //2. add +1 to the qty
      //3.  if not --> add to the cart with qty = 1
      // 1. CHECK if exists
      const idx = prevState.findIndex((item) => item.id === product.id);
      if (idx > -1) {
        // if exists
        const currentProduct = prevState[idx];
        currentProduct.qty += 1;

        return [...prevState];
      } else {
        const newProduct = { ...product, qty: 1 };
        return [...prevState, newProduct];
      }
    });
  };

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      <BrowserRouter>
        <div>
          <CustomNavbar />

          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="cart" element={<CartPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </CartContext.Provider>
  );
}

export default App;
