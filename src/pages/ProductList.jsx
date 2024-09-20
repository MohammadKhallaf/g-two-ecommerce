import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import ProductCard from "../components/ProductCard";
import { useProducts } from "../store/ProductContext";

function ProductList() {
  const { products } = useProducts();

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
