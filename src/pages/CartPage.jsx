import { useMemo, useState } from "react";
import { Button } from "react-bootstrap";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Stack from "react-bootstrap/Stack";
import ToggleButton from "react-bootstrap/ToggleButton";
import { Link } from "react-router-dom";
import { useAuth } from "../store/AuthContext";
import { useCart } from "../store/CartContext";
import { toast } from "react-toastify";

const radios = [
  { name: "Cash", value: "1" },
  { name: "Credit", value: "2" },
  { name: "Wallet", value: "3" },
];

// 1. create file js or jsx
// 2. function ComponentName
// 3. return <></>
// 4. export
function CartPage() {
  const [radioValue, setRadioValue] = useState("1");
  const { user, login } = useAuth();
  const { cart, clearCart, removeFromCart } = useCart();
  // cart => map

  // const total = cart.reduce((prev, item) => prev + item.price * item.qty, 0);
  const total = useMemo(() => {
    return cart.reduce((prev, item) => prev + item.price * item.qty, 0);
  }, [cart]); // depend on what ?

  const checkoutHandler = () => {
    toast.success("Checkout Done!");
    clearCart();
  };

  return (
    <Container className="my-5 d-flex flex-column gap-3 w-75">
      {cart.length > 0 && (
        <Button variant="danger" onClick={clearCart}>
          Clear Cart
        </Button>
      )}
      <Stack gap={3}>
        {cart.map(function (product) {
          return (
            <Card key={product.id}>
              <Card.Body className="d-flex flex-row align-items-center">
                {product.name}{" "}
                <b className="text-primary px-1">{product.price}EGP</b> x
                {product.qty}
                <Button
                  size="sm"
                  variant="danger"
                  className="ms-auto"
                  onClick={() => {
                    removeFromCart(product);
                  }}
                >
                  Remove
                </Button>
              </Card.Body>
            </Card>
          );
        })}
        <hr />
        {cart.length > 0 && <b>{total} EGP</b>}
      </Stack>{" "}
      <br />
      <Stack direction="vertical" gap={3}>
        <ButtonGroup>
          {radios.map((radio, idx) => (
            <ToggleButton
              key={idx}
              id={`radio-${idx}`}
              type="radio"
              variant={idx % 2 ? "outline-success" : "outline-danger"}
              name="radio"
              disabled={cart.length === 0}
              value={radio.value}
              checked={radioValue === radio.value}
              onChange={(e) => setRadioValue(e.currentTarget.value)}
            >
              {radio.name}
            </ToggleButton>
          ))}
        </ButtonGroup>
        {user ? (
          <Button disabled={cart.length === 0} onClick={checkoutHandler}>
            Checkout
          </Button>
        ) : (
          <Button variant="warning" as={Link} to="/login">
            Login to proceed
          </Button>
        )}
      </Stack>
    </Container>
  );
}
export default CartPage;
