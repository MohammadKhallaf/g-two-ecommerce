import Container from "react-bootstrap/Container";
import Stack from "react-bootstrap/Stack";
import Card from "react-bootstrap/Card";
import { useContext } from "react";
import { CartContext } from "../CartContext";

// 1. create file js or jsx
// 2. function ComponentName
// 3. return <></>
// 4. export
function CartPage() {
  const { cart, addToCart } = useContext(CartContext);
  // cart => map
  return (
    <Container className="my-5">
      {" "}
      <Stack gap={3}>
        {cart.map(function (product, arg2, arg3) {
          // current item -> arg / item / product / ahmed <- 1st arg
          // index in the array -> door / idx / index / mahmoud <- 2nd arg
          // --> shape ->[black-box]--> <SHAPE />
          // return

          // arg2 ===> index
          return (
            <Card key={arg2}>
              <Card.Body>
                {product.name} x{product.qty}
              </Card.Body>
            </Card>
          );
        })}
      </Stack>
    </Container>
  );
}
export default CartPage;
