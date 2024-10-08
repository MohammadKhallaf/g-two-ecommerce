import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import CartPage from "./pages/CartPage";
import GuestLayout from "./pages/GuestLayout";
import LoginPage from "./pages/LoginPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import ProductList from "./pages/ProductList";
import AuthProvider from "./store/AuthContext";
import CartProvider from "./store/CartContext";
import ProductProvider from "./store/ProductContext";
import WishlistProvider from "./store/WishlistContext";

function App() {
  return (
    <AuthProvider>
      <ProductProvider>
        <CartProvider>
          <WishlistProvider>
            <BrowserRouter>
              <div>
                <GuestLayout>
                  <Routes>
                    <Route path="login" element={<LoginPage />} />
                    <Route path="cart" element={<CartPage />} />
                    <Route
                      path="products/:id"
                      element={<ProductDetailsPage />}
                    />
                    <Route path="/" element={<ProductList />} />
                  </Routes>
                  <ToastContainer />
                </GuestLayout>
              </div>
            </BrowserRouter>
          </WishlistProvider>
        </CartProvider>
      </ProductProvider>
    </AuthProvider>
  );
}

export default App;
