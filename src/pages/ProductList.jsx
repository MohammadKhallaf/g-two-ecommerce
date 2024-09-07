import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import ProductCard from "../components/ProductCard";
import { useContext } from "react";
import { AppContext } from "../context";

function ProductList() {
  const { products } = useContext(AppContext);
  return (
    <Container className="my-5">
      <Row xs={1} md={2} lg={3} className="g-4">
        {products.map((item, idx) => (
          <Col key={idx}>
            <ProductCard product={item} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default ProductList;
