import { createContext, useContext, useEffect, useState } from "react";

const ProductContext = createContext();

export const useProducts = () => useContext(ProductContext);

//  composition

export default function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts([
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
    ]);
  }, []);
  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
}
