import Container from "react-bootstrap/Container";
import Stack from "react-bootstrap/Stack";
import Card from "react-bootstrap/Card";
import { useContext } from "react";
import { CartContext } from "../CartContext";
import { Button, Form, InputGroup } from "react-bootstrap";

// 1. create file js or jsx
// 2. function ComponentName
// 3. return <></>
// 4. export
function CartPage() {
  const { cart, removeFromCart, updateCartQty } = useContext(CartContext);

  const validateQty = (e, product) => {
    if (e.target.value < 1) {
      updateCartQty(product, 1);
    }

    if (e.target.value > 99) {
      updateCartQty(product, 99);
    }
  };

  if (cart.length === 0) {
    return (
      <Stack className="my-5">
        <h1 className="text-center">Cart is empty!</h1>
      </Stack>
    );
  }

  // cart => map
  return (
    <Container className="my-5" style={{ maxWidth: "800px" }}>
      {" "}
      <Stack gap={3}>
        <Card className="border-0">
          <Card.Body>
            <div className="d-flex justify-content-between align-items-center fw-bold">
              <div>Name</div>
              <div>Price</div>
              <div>Quantity</div>
              <div>Total</div>
              <div>Remove</div>
            </div>
          </Card.Body>
        </Card>
        {cart.map(function (product, arg2, arg3) {
          // current item -> arg / item / product / ahmed <- 1st arg
          // index in the array -> door / idx / index / mahmoud <- 2nd arg
          // --> shape ->[black-box]--> <SHAPE />
          // return

          // arg2 ===> index
          return (
            <Card key={arg2}>
              <Card.Body>
                <div className="d-flex justify-content-between align-items-center gap-2 flex-wrap">
                  {product.name}
                  <div>${product.price}</div>
                  <div>
                    <InputGroup>
                      <Button
                        variant="outline-secondary"
                        onClick={() => updateCartQty(product, product.qty - 1)}
                        disabled={product.qty < 2}
                      >
                        -
                      </Button>
                      <Form.Control
                        type="number"
                        value={product.qty}
                        onChange={(e) =>
                          updateCartQty(product, Number(e.target.value))
                        }
                        min={1}
                        max={99}
                        onBlur={(e) => validateQty(e, product)}
                        style={{ textAlign: "center", maxWidth: 60 }}
                      />
                      <Button
                        variant="outline-secondary"
                        onClick={() => updateCartQty(product, product.qty + 1)}
                        disabled={product.qty > 98}
                      >
                        +
                      </Button>
                    </InputGroup>
                  </div>
                  <div>${product.qty * product.price}</div>
                  <Button
                    variant="danger"
                    onClick={() => removeFromCart(product)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-trash-2"
                    >
                      <path d="M3 6h18" />
                      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                      <line x1="10" x2="10" y1="11" y2="17" />
                      <line x1="14" x2="14" y1="11" y2="17" />
                    </svg>
                  </Button>
                </div>
              </Card.Body>
            </Card>
          );
        })}
      </Stack>
      <h1 className="text-end mt-5">
        Sub Total: ${cart.reduce((a, b) => a + b.price, 0)}
      </h1>
    </Container>
  );
}
export default CartPage;
