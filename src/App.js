import { BrowserRouter, Route, Routes } from "react-router-dom";
import CustomNavbar from "./components/CustomNavbar";
import ProductList from "./pages/ProductList";
import CartPage from "./pages/CartPage";
import "./App.css";
import { useState } from "react";
import { CartContext } from "./CartContext";
import WishListPage from "./pages/WishListPage";

/** #### OLD CODE ISSUE:
 * In Development Mode React runs in Strict Mode, hence it will render twice, since setCart() used in addToCart() was not a pure
 * function, because it was not returning a new array but changing the original array that caused the double increment of qty with
 * only one click.
 *
 * A pure function should always return the same output for the same input.
 *
 * - [StrictMode](https://react.dev/reference/react/StrictMode)
 * - [React Keeping Components Pure](https://react.dev/learn/keeping-components-pure)
 *
 * #### old code:
 * ```js
 * const currentProduct = prevState[idx];
 * currentProduct.qty += 1;
 * return [...prevState];
 * ```
 */
function App() {
  const [cart, setCart] = useState([]);
  const [wishList, setWishList] = useState({});
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
        const newState = prevState.map((item) => {
          if (item.id === product.id) {
            return { ...item, qty: item.qty + 1 };
          }
          return item;
        });
        return newState;
      } else {
        const newProduct = { ...product, qty: 1 };
        return [...prevState, newProduct];
      }
    });
  };

  const updateCartQty = (product, qty) => {
    if (qty < 1) return;
    setCart((prevState) => {
      const idx = prevState.findIndex((item) => item.id === product.id);
      if (idx > -1) {
        const newState = prevState.map((item) => {
          if (item.id === product.id) {
            return { ...item, qty };
          }
          return item;
        });
        return newState;
      } else {
        return prevState;
      }
    });
  };

  const removeFromCart = (product) => {
    setCart((prevState) => {
      const idx = prevState.findIndex((item) => item.id === product.id);
      if (idx > -1) {
        return prevState.filter((item) => item.id !== product.id);
      } else {
        return prevState;
      }
    });
  };

  const toggleWish = (product) => {
    setWishList((prevState) => {
      const inWishList = prevState[product.id];
      if (inWishList) {
        const newState = { ...prevState };
        delete newState[product.id];
        return newState;
      } else {
        return { ...prevState, [product.id]: product };
      }
    });
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, wishList, toggleWish, updateCartQty }}>
      <BrowserRouter>
        <div>
          <CustomNavbar />

          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="cart" element={<CartPage />} />
            <Route path="wishlist" element={<WishListPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </CartContext.Provider>
  );
}

export default App;
