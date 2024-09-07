import { useContext } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { AppContext } from "../context";

function ProductCard({ product }) {
  const { addToCart } = useContext(AppContext);
  const { name, description, price, image } = product;
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          {description} -{price}EGP
        </Card.Text>
        <Button variant="primary" onClick={() => addToCart(product)}>
          Add to cart
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
