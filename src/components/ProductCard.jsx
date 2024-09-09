import { useContext } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { CartContext } from "../CartContext";

function ProductCard({ product }) {
  const { cart, addToCart } = useContext(CartContext);
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="https://placehold.co/600x400" />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>
          {product.description} -{product.price}EGP
        </Card.Text>
        <Button
          variant="primary"
          onClick={() => {
            addToCart(product);
          }}
        >
          Add to cart
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
