import { useContext } from "react";
import Container from "react-bootstrap/Container";
import { Col, Row } from "react-bootstrap";
import Stack from "react-bootstrap/Stack";

import { CartContext } from "../CartContext";
import ProductCard from "../components/ProductCard";

function WishListPage() {
  const { wishList } = useContext(CartContext);

  if (Object.keys(wishList).length === 0) {
    return (
      <Stack className="my-5">
        <h1 className="text-center">WishList is empty!</h1>
      </Stack>
    );
  }

  return (
    <Container className="my-5">
      <Row xs={1} md={2} lg={3} className="g-4">
        {Object.values(wishList).map((item, idx) => (
          <Col key={idx}>
            <ProductCard product={item} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
export default WishListPage;
