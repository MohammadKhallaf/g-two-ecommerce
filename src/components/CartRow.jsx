import { useContext } from "react";
import { Image } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

import { AppContext } from "../context";

function CartRow({ lineItem }) {
  const { removeFromCart, updateCartItem } = useContext(AppContext);
  const { product, qty } = lineItem;
  const { id, name, price, image } = product;

  return (
    <tr className="align-middle">
      <td>
        <Image src={image} thumbnail style={{ width: "100px" }} />
      </td>
      <td>{name}</td>
      <td>{price}</td>
      <td>
        <InputGroup size="sm">
          <Button
            variant="outline-secondary"
            onClick={() => updateCartItem(id, qty - 1)}
          >
            -
          </Button>
          <Form.Control
            aria-label="Quantity"
            className="text-center"
            value={qty}
            onChange={(e) => updateCartItem(id, Number(e.target.value))}
            type="number"
            min="1"
            style={{ maxWidth: "3rem" }}
          />
          <Button
            variant="outline-secondary"
            onClick={() => updateCartItem(id, qty + 1)}
          >
            +
          </Button>
        </InputGroup>
      </td>
      <td>{qty * price}</td>
      <td>
        <Button
          className="bg-transparent border-0"
          onClick={() => removeFromCart(id)}
        >
          &#128465;
        </Button>
      </td>
    </tr>
  );
}

export default CartRow;
