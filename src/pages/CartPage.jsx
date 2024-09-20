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
  const { cart, addToCart } = useCart();
  // cart => map

  // const total = cart.reduce((prev, item) => prev + item.price * item.qty, 0);
  const total = useMemo(() => {
    return cart.reduce((prev, item) => prev + item.price * item.qty, 0);
  }, [cart]); // depend on what ?

  return (
    <Container className="my-5 w-75">
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
                {product.name} -{product.price}EGP x{product.qty}
              </Card.Body>
            </Card>
          );
        })}
        <b>{total} EGP</b>
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
              value={radio.value}
              checked={radioValue === radio.value}
              onChange={(e) => setRadioValue(e.currentTarget.value)}
            >
              {radio.name}
            </ToggleButton>
          ))}
        </ButtonGroup>
        {user ? (
          <Button disabled={total === 0}>Checkout</Button>
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
