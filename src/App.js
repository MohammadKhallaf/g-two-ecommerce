import { BrowserRouter, Route, Routes } from "react-router-dom";
import CustomNavbar from "./components/CustomNavbar";
import ProductList from "./pages/ProductList";
import CartPage from "./pages/CartPage";
import { AppContext } from "./context";
import { useState } from "react";

const productList = [
  {
    id: 1,
    name: "Product 1",
    price: 1000,
    image: "https://placehold.co/600x400",
    description: "Product 1 description",
  },
  {
    id: 2,
    name: "Product 2",
    price: 2000,
    image: "https://placehold.co/600x400",
    description: "Product 2 description",
  },
  {
    id: 3,
    name: "Product 3",
    price: 3000,
    image: "https://placehold.co/600x400",
    description: "Product 3 description",
  },
  {
    id: 4,
    name: "Product 4",
    price: 4000,
    image: "https://placehold.co/600x400",
    description: "Product 4 description",
  },
  {
    id: 5,
    name: "Product 5",
    price: 5000,
    image: "https://placehold.co/600x400",
    description: "Product 5 description",
  },
];

function App() {
  const [products, setProducts] = useState(productList);
  const [cart, setCart] = useState({});
  const addToCart = (product) => {
    const strId = String(product.id);
    if (cart[strId]) {
      setCart((prev) => ({
        ...prev,
        [strId]: { ...prev[strId], qty: prev[strId].qty + 1 },
      }));
    } else {
      setCart((prev) => ({
        ...prev,
        [strId]: { product, qty: 1, timestamp: Date.now() },
      }));
    }
  };

  const removeFromCart = (id) => {
    const strId = String(id);
    if (cart[strId]) {
      setCart((prev) => {
        // remove cost key from object
        const { [strId]: _, ...rest } = prev;
        return rest;
      });
    }
  };

  const updateCartItem = (productId, qty) => {
    const strId = String(productId);
    if (qty < 1) {
      removeFromCart(productId);
      return;
    }

    if (cart[strId]) {
      setCart((prev) => ({
        ...prev,
        [strId]: { ...prev[strId], qty },
      }));
    } else {
      setCart((prev) => ({
        ...prev,
        [strId]: { ...prev[strId], qty },
      }));
    }
  };

  const value = {
    products,
    setProducts,
    cart,
    setCart,
    addToCart,
    removeFromCart,
    updateCartItem,
  };

  return (
    <BrowserRouter>
      <AppContext.Provider value={value}>
        <div>
          <CustomNavbar />
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
        </div>
      </AppContext.Provider>
    </BrowserRouter>
  );
}

export default App;
