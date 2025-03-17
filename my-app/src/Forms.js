import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Listado from './Listado';

function Login() {
  const [formValues, setFormValues] = useState({ user: "", password: "" });
  const [error, setError] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Controla si se muestra el login o el listado

  const usuarios = { pepito: "1234", juan: "3456" };
  const value = usuarios[formValues.user] || false;

  const handleLogin = (e) => {
    e.preventDefault();
    if (value === formValues.password) {
      setError(false);
      setIsLoggedIn(true); // Cambia a mostrar el listado
    } else {
      setError(true);
    }
  };

  const handleUserChange = (e) => {
    setFormValues({ ...formValues, user: e.target.value });
  };

  const handlePasswordChange = (e) => {
    setFormValues({ ...formValues, password: e.target.value });
  };

  // Si está autenticado, muestra el Listado
  if (isLoggedIn) {
    return <Listado />;
  }

  return (
    <Container className="mt-5">
      <h3 className="text-center mb-4">Inicio de sesión</h3>
      <Form onSubmit={handleLogin}>
        <Form.Group className="mb-3">
          <Form.Label><b>Nombre de usuario</b></Form.Label>
          <Form.Control
            type="text"
            value={formValues.user}
            onChange={handleUserChange}
            placeholder="Ingrese su usuario"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label><b>Contraseña</b></Form.Label>
          <Form.Control
            type="password"
            value={formValues.password}
            onChange={handlePasswordChange}
            placeholder="Ingrese su contraseña"
          />
        </Form.Group>

        {error && (
          <p className="text-danger">Error de autenticación. Revise sus credenciales.</p>
        )}

        <div className="d-flex justify-content-center">
          <Button variant="primary" type="submit" className="me-2">Ingresar</Button>
          <Button variant="danger" type="reset">Cancelar</Button>
        </div>
      </Form>
    </Container>
  );
}

export default Login;
