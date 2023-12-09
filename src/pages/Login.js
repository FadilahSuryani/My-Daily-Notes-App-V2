import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import { login, putAccessToken } from "../utils/network";

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function onSubmitHandler(event) {
    event.preventDefault();
    const response = await login({ username, password });
    if (response?.data?.token) {
      putAccessToken(response.data.token);
      navigate(`/${username}`);
    }
  }

  return (
    <div className="p-2">
      <strong className="fs-1 text-align text-dark">Sign In</strong>
      <Form
        className="row px-5 g-3 m-5 text-light col-md-4 mx-auto"
        onSubmit={(event) => {
          onSubmitHandler(event);
        }}
      >
        <Form.Group className="row-md-6 text-start text-dark">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            required
          />
        </Form.Group>
        <Form.Group className="row-md-6 text-start text-dark">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
          />
        </Form.Group>
        <Form.Group>
          {username && password ? (
            <Button
              className="col-3 mb-1 btn-outline-warning"
              variant="light"
              type="submit"
            >
              Log In
            </Button>
          ) : (
            <Button
              className="col-3 mb-1 btn-outline-dark"
              variant="dark"
              type="submit"
              disabled
            >
              Log In
            </Button>
          )}
        </Form.Group>
        <div className="line" />
        <Form>
          <div className="text-muted">
            if you don't have account,{" "}
            <Link to="/register" className="text">
              <strong>Register</strong>
            </Link>
          </div>
        </Form>
      </Form>
    </div>
  );
}

export default Login;
