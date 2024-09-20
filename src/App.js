import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import CustomNavbar from "./components/CustomNavbar";
import CartPage from "./pages/CartPage";
import LoginPage from "./pages/LoginPage";
import ProductList from "./pages/ProductList";
import AuthProvider from "./store/AuthContext";
import CartProvider from "./store/CartContext";
import WishlistProvider from "./store/WishlistContext";

import "./App.css";
import ProductProvider from "./store/ProductContext";
import ProductDetailsPage from "./pages/ProductDetailsPage";

function App() {
  return (
    <AuthProvider>
      <ProductProvider>
        <CartProvider>
          <WishlistProvider>
            <BrowserRouter>
              <div>
                <CustomNavbar />

                <Routes>
                  <Route path="login" element={<LoginPage />} />
                  <Route path="cart" element={<CartPage />} />
                  <Route path="products/:id" element={<ProductDetailsPage />} />
                  <Route path="/" element={<ProductList />} />
                </Routes>
                <ToastContainer />
              </div>
            </BrowserRouter>
          </WishlistProvider>
        </CartProvider>
      </ProductProvider>
    </AuthProvider>
  );
}

export default App;
