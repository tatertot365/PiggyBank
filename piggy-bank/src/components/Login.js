import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const validateLogin = () => {
    if (username === "parent" && password === "password") {
      return navigate("/parent");
    } else if (username === "child" && password === "password") {
      return navigate("/child");
    } else {
      alert("Invalid username or password");
    }
  };

  return (
    <Container className="login">
      <h1>Login</h1>
      <Form>
        <Form.Group>
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <br />
        <Button variant="primary" onClick={validateLogin}>
          Login
        </Button>
      </Form>
    </Container>
  );
}

export default LoginForm;
