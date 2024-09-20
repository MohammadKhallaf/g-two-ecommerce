import { createContext, useContext, useEffect, useState } from "react";

const WishlistContext = createContext();

export const useWishlist = () => useContext(WishlistContext);

function WishlistProvider({ children }) {
  const [wishlist, setWishlist] = useState([]);

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
    const wishlistData = localStorage.getItem("wishlist");
    if (wishlistData) {
      const invertedWishlist = JSON.parse(wishlistData);
      setWishlist(invertedWishlist);
    }
  }, []);

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        addToWishlist,
        removeFromWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
}

export default WishlistProvider;
