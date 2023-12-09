import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { register } from "../utils/network";

function Register() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function onSubmitHandler(event) {
    event.preventDefault();
    register({ username, password }).then((response) => {
      console.log(response);
      if (response) {
        console.log(response?.code);
        alert("You have successfully created an account");
        navigate("/");
      }
    });
  }

  return (
    <div className="p-2">
      <strong className="fs-1 text-center text-dark">Sign Up</strong>
      <Form
        className="row px-5 g-3 m-5 text-light col-md-4 mx-auto"
        onSubmit={(event) => {
          onSubmitHandler(event);
        }}
      >
        <Form.Group className="row-md-6 text-start text-dark">
          <Form.Label>Create Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter username"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            required
          />
        </Form.Group>
        <Form.Group className="row-md-6 text-start text-dark">
          <Form.Label>Create Password</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter password"
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
              Register
            </Button>
          ) : (
            <Button
              className="col-3 mb-1 btn-outline-dark"
              variant="light"
              type="submit"
              disabled
            >
              Register
            </Button>
          )}
        </Form.Group>
      </Form>
    </div>
  );
}

export default Register;
