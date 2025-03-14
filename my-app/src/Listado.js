

import BootstrapTable from 'react-bootstrap-table-next';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const { useEffect, useState } = require("react");

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
      })  }, []);

  console.log("ayudo");
  console.log(robots);
  console.log("aaaaaa");

  const columnas = [
    { dataField: 'id', text: 'ID' },
    { dataField: 'nombre', text: 'Nombre' },
    { dataField: 'modelo', text: 'Modelo' },
    { dataField: 'empresaFabricante', text: 'Empresa Fabricante' },

  ]; 



/*
const [mascotas, setMascotas] = useState([]);
 useEffect(() => {
   const URL =
     "https://gist.githubusercontent.com/josejbocanegra/829a853c6c68880477697acd0490cecc/raw/99c31372b4d419a855e53f0e891246f313a71b20/mascotas.json";
   fetch(URL)
     .then((data) => data.json())
     .then((data) => {
       setMascotas(data);
     });
 }, []);}*/

 return (
  <div className="container mt-4">
    <table className="table table-striped">
      <thead className="thead-dark"> {/* Cabecera negra */}
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Modelo</th>
          <th>empresaFabricante</th>
        </tr>
      </thead>
      <tbody>
        {robots.map((item) => (
          <tr key={item.id} onClick={() => setRobotSeleccionado(item)}>
            <td>{item.id}</td>
            <td>{item.nombre}</td>
            <td>{item.modelo}</td>
            <td>{item.empresaFabricante}</td>
          </tr>
        ))}
      </tbody>
    </table>

</div>
);


}

export default Listado;
