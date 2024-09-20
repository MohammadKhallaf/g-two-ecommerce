import { useCallback } from "react";
import { Stack } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useCart } from "../store/CartContext";
import { useWishlist } from "../store/WishlistContext";
import { Link } from "react-router-dom";

function ProductCard({ product }) {
  const { addToCart } = useCart();
  const { wishlist, addToWishlist, removeFromWishlist } = useWishlist();

  //
  const isInWishlistFn = useCallback(
    (product) => {
      const index = wishlist.findIndex((item) => {
        return item.id === product.id;
      });
      return index > -1;
    },
    [wishlist]
  );

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={product.image} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>
          {product.description} <b>{product.price}EGP</b>
        </Card.Text>
        <Stack direction="vertical" gap={2}>
          <Button variant="primary" as={Link} to={`/products/${product.id}`}>
            Details{" "}
          </Button>
          <Button
            variant="success"
            onClick={() => {
              addToCart(product);
            }}
          >
            Add to cart
          </Button>

          {isInWishlistFn(product) ? (
            <Button
              variant="secondary"
              onClick={() => {
                removeFromWishlist(product);
              }}
            >
              Remove From wishlist
            </Button>
          ) : (
            <Button
              variant="primary"
              onClick={() => {
                addToWishlist(product);
              }}
            >
              Add to wishlist
            </Button>
          )}
        </Stack>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
