import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import "./App.css";
import CustomNavbar from "./components/CustomNavbar";
import ProductCard from "./components/ProductCard";

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
  return (
    <div>
      <CustomNavbar />

      <Container className="my-5">
        <Row xs={1} md={2} lg={3} className="g-4">
          {Array.from({ length: 4 }).map((_, idx) => (
            <Col key={idx}>
              <ProductCard />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default App;
