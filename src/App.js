import { BrowserRouter, Route, Routes } from "react-router-dom";
import CustomNavbar from "./components/CustomNavbar";
import ProductList from "./pages/ProductList";

import "./App.css";
function App() {
  return (
    <BrowserRouter>
      <div>
        <CustomNavbar />

        <Routes>
          <Route path="/" element={<ProductList />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
