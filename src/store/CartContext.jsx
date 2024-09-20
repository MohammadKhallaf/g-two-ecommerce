import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext({
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
  clearCart: () => {},
});

export const useCart = () => useContext(CartContext);

function CartProvider({ children }) {
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

  const clearCart = () => {
    setCart([]);
    const convertedArr = JSON.stringify([]);
    localStorage.setItem("cart", convertedArr);
  };

  // initial render
  useEffect(() => {
    // read from local storage
    const cartData = localStorage.getItem("cart");
    if (cartData) {
      const invertedCart = JSON.parse(cartData);
      setCart(invertedCart);
    }
  }, []);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
