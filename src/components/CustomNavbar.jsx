import { useContext } from "react";
import { Badge } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { AppContext } from "../context";

function CustomNavbar() {
  const { cart } = useContext(AppContext);
  const cartItemsCount = Object.values(cart).reduce((a, b) => a + b.qty, 0);
  return (
    <Navbar bg="dark" data-bs-theme="dark" sticky="top">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Ecommerce
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/features">
            Features
          </Nav.Link>
          <Nav.Link as={Link} to="/cart">
            Cart <Badge bg="danger">{cartItemsCount}</Badge>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
