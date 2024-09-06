import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import "./App.css";
import CustomNavbar from "./components/CustomNavbar";
import ProductCard from "./components/ProductCard";

function App() {
  return (
    <div>
      <CustomNavbar />
      <ProductCard />
    </div>
  );
}

export default App;
