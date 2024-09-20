import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const ProductContext = createContext();

export const useProducts = () => useContext(ProductContext);

//  composition

export default function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);

  async function getProductList() {
    // GET
    // "http://localhost:5000/api/products"
    axios.get("http://localhost:5000/api/products").then((response) => {
      setProducts(
        response.data.map((item) => {
          return {
            ...item,
            id: item._id,
          };
        })
      );
    });
  }

  useEffect(() => {
    getProductList();
  }, []);

  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
}
