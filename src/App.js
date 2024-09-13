import { BrowserRouter, Route, Routes } from "react-router-dom";
import CustomNavbar from "./components/CustomNavbar";
import ProductList from "./pages/ProductList";
import CartPage from "./pages/CartPage";
import "./App.css";
import { useEffect, useState } from "react";
import { CartContext } from "./CartContext";

function App() {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  const [user, setUser] = useState("ahmed");

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

        // local storage save data in string format only
        // JSON
        // data -> string
        const convertedArr = JSON.stringify([...prevState]);
        localStorage.setItem("cart", convertedArr);
        return [...prevState];
      } else {
        const newProduct = { ...product, qty: 1 };

        const convertedArr = JSON.stringify([...prevState, newProduct]);
        localStorage.setItem("cart", convertedArr);
        return [...prevState, newProduct];
      }
    });
  };

  const removeFromCart = (product) => {
    setCart((prevArray) => {
      const newArray = prevArray.filter((item) => {
        return item.id !== product.id;
      });

      const convertedArr = JSON.stringify(newArray);
      localStorage.setItem("cart", convertedArr);
      return newArray;
    });
  };

  // wishlist code
  const addToWishlist = (product) => {
    // prevState === cart state (on the exact previous render)
    setWishlist((prevState) => {
      const idx = prevState.findIndex((item) => item.id === product.id);
      if (idx > -1) {
        const convertedArr = JSON.stringify([...prevState]);
        localStorage.setItem("wishlist", convertedArr);
        return [...prevState];
      } else {
        const convertedArr = JSON.stringify([...prevState, product]);
        localStorage.setItem("wishlist", convertedArr);
        return [...prevState, product];
      }
    });
  };
  const removeFromWishlist = (product) => {
    setWishlist((prevArray) => {
      const newArray = prevArray.filter((item) => {
        return item.id !== product.id;
      });

      const convertedArr = JSON.stringify(newArray);
      localStorage.setItem("wishlist", convertedArr);
      return newArray;
    });
  };

  // initial render
  useEffect(() => {
    // read from local storage
    const cartData = localStorage.getItem("cart");
    if (cartData) {
      const invertedCart = JSON.parse(cartData);
      setCart(invertedCart);
    }
    // read from local storage
    const wishlistData = localStorage.getItem("wishlist");
    if (wishlistData) {
      const invertedWishlist = JSON.parse(wishlistData);
      setWishlist(invertedWishlist);
    }
  }, []);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        wishlist,
        addToWishlist,
        removeFromWishlist,
      }}
    >
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
