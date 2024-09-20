import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import ProductCard from "../components/ProductCard";
import { useProducts } from "../store/ProductContext";
import { useMemo, useState } from "react";
import { ToggleButton } from "react-bootstrap";

function ProductList() {
  const { products } = useProducts();
  const [sorted, setSorted] = useState(false);
  // [...products].sort -> change the original array
  const sortedProducts = useMemo(() => {
    return [...products].sort((itemA, itemB) => {
      return itemA.price - itemB.price;
    });
  }, [products]);

  const list = sorted ? sortedProducts : products;

  return (
    <Container className="my-5">
      <ToggleButton
        className="mb-2"
        id="toggle-check"
        type="checkbox"
        variant="outline-primary"
        checked={sorted}
        value="1"
        onChange={(e) => setSorted(e.currentTarget.checked)}
      >
        Sort by price
      </ToggleButton>
      <Row xs={1} md={2} lg={3} className="g-4">
        {list.map((item) => (
          <Col key={item._id}>
            <ProductCard product={item} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default ProductList;
