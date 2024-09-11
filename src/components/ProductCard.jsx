import { useContext } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { CartContext } from "../CartContext";

function ProductCard({ product }) {
  const { addToCart, wishList, toggleWish } = useContext(CartContext);
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="https://placehold.co/600x400" />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>
          {product.description} -{product.price}EGP
        </Card.Text>
        <div className="d-flex align-items-center justify-content-between">
          <Button
            variant="primary"
            onClick={() => {
              addToCart(product);
            }}
          >
            Add to cart
          </Button>
          <Button
            variant={wishList[product.id] ? "danger" : "secondary"}
            onClick={() => toggleWish(product)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-heart"
            >
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
            </svg>
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
