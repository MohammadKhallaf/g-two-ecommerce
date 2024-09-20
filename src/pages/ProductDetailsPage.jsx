import { useParams } from "react-router-dom";
import { useProducts } from "../store/ProductContext";
import { Button, Card, Container, Stack } from "react-bootstrap";
import { useCallback } from "react";
import { useCart } from "../store/CartContext";
import { useWishlist } from "../store/WishlistContext";

export default function ProductDetailsPage() {
  const { id } = useParams();

  const { products } = useProducts();
  const { addToCart } = useCart();
  const { wishlist, addToWishlist, removeFromWishlist } = useWishlist();

  const currentProduct = products.find((item) => {
    return item.id === id;
  });

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
    <Container className="py-3">
      <Card className="bg-dark text-white">
        <Card.Img src={currentProduct?.image} alt="Card image" />
        <Card.ImgOverlay>
          <Card.Title>{currentProduct?.name}</Card.Title>
          <Card.Text>{currentProduct?.description}</Card.Text>
          <Card.Text>{currentProduct?.price} EGP</Card.Text>
        </Card.ImgOverlay>
      </Card>
      <Stack direction="horizontal" className="py-2" gap={2}>
        <Button
          variant="success"
          onClick={() => {
            addToCart(currentProduct);
          }}
        >
          Add to cart
        </Button>

        {isInWishlistFn(currentProduct) ? (
          <Button
            variant="secondary"
            onClick={() => {
              removeFromWishlist(currentProduct);
            }}
          >
            Remove From wishlist
          </Button>
        ) : (
          <Button
            variant="primary"
            onClick={() => {
              addToWishlist(currentProduct);
            }}
          >
            Add to wishlist
          </Button>
        )}
      </Stack>
    </Container>
  );
}
