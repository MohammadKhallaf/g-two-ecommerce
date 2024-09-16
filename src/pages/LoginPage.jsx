import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useAuth } from "../store/AuthContext";
import { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";

export default function LoginPage() {
  const { user, login } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // method -> POST
  // url -> localhost:5000/api/auth/login
  // { username , password}

  function submitHandler(event) {
    event.preventDefault();
    axios
      .post("http://localhost:5000/api/auth/login", {
        username,
        password,
      })
      .then((response) => {
        console.log(response);
        toast.success("LoggedIn successfully!");
        login({
          ...response.data,
        });
      })
      .catch(() => {
        toast.error("Error in the login process!");
      });
  }

  return (
    <Container className="p-5 w-50 bg-light my-5 border rounded-3 shadow">
      <header>
        <h2 className="text-center">Login to continue</h2>
      </header>
      <Form className="mt-4" onSubmit={submitHandler}>
        <Form.Group className="mb-3" controlId="formUserName">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Your username"
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          />
          {/* <input event.target.value */}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="w-100 mt-4">
          Submit
        </Button>
      </Form>
    </Container>
  );
}
