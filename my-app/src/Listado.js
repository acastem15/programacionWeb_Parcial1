import { useEffect, useState } from "react";
import { Row, Col, Container, Card,Image } from "react-bootstrap";

function Listado() {
  const [robots, setRobots] = useState([]);
  const [loading, setLoading] = useState(true);
  const [robotSeleccionado, setRobotSeleccionado] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3001/robots") // Ajusta la URL a tu servidor
      .then((response) => response.json())
      .then((data) => {
        setRobots(data);
        setLoading(false);
      });
  }, []);

  const robotSeleccionadoSelect = (item) => {
    fetch(`http://localhost:3001/robots/${item.id}`) // Ajusta la URL a tu servidor
      .then((response) => response.json())
      .then((data) => {
        setRobotSeleccionado(data);
      });
  };

  return (
    <Container>
      <Row>
        <Col sm={8}>
          <div className="container mt-4">
            <table className="table table-striped">
              <thead className="table-dark">
                <tr>
                  <th>ID</th>
                  <th>Nombre</th>
                  <th>Modelo</th>
                  <th>Empresa Fabricante</th>
                </tr>
              </thead>
              <tbody>
                {robots.map((item) => (
                  <tr key={item.id} onClick={() => robotSeleccionadoSelect(item)}>
                    <td>{item.id}</td>
                    <td>{item.nombre}</td>
                    <td>{item.modelo}</td>
                    <td>{item.empresaFabricante}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Col>

        {/* Mostrar un Card con la información del robot seleccionado */}
        {robotSeleccionado && (
          <Col sm={4}>
            <Card className="mt-4">
              <Card.Body>
                <Card.Title>{robotSeleccionado.nombre}</Card.Title>
                <img src={robotSeleccionado.imagen} rounded fluid alt="Foto de perfil" />
                <Card.Text>
                <b>Año de fabricacion:</b> {robotSeleccionado.capacidadProcesamiento} <br />
                  <b>Modelo:</b> {robotSeleccionado.capacidadProcesamiento} <br />
                  <b>Humor:</b> {robotSeleccionado.humor}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        )}
      </Row>
    </Container>
  );
}

export default Listado;
