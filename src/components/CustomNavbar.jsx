import Badge from "react-bootstrap/Badge";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { useCart } from "../store/CartContext";
import { useWishlist } from "../store/WishlistContext";
import { NavDropdown } from "react-bootstrap";
import { useAuth } from "../store/AuthContext";
import { toast } from "react-toastify";

function CustomNavbar() {
  const { logout } = useAuth();
  const { cart } = useCart();
  const { wishlist } = useWishlist();

  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Ecommerce
        </Navbar.Brand>
        <Nav className="ms-auto">
          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/wishlist">
            Wishlist <Badge bg="danger">{wishlist.length}</Badge>
          </Nav.Link>
          <Nav.Link as={Link} to="/cart">
            Cart{" "}
            <Badge bg="warning" text="dark">
              {cart.length}
            </Badge>
          </Nav.Link>
          <NavDropdown title="Account" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item
              onClick={() => {
                toast.info("Logged Out!");
                logout();
              }}
            >
              logout
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
