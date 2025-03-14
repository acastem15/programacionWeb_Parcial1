import Card from "react-bootstrap/Card";

function Mascota(props) {
const [robot, setRobot] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3001/robots/id") // Ajusta la URL a tu servidor
      .then((response) => response.json())
      .then((data) => {
        setRobot(data);
        setLoading(false);
      })  }, []);


 return (
   <Card style={{ width: "18rem", height: "24rem" }} className="mb-3">
     <Card.Img
       style={{ height: "14rem" }}
       variant="top"
       src={props.robot.foto}
       alt={props.mascota.descripcion}
     />
     <Card.Body>
       <Card.Title>
         <Link to={"/mascotas/" + props.mascota.id}>
           {props.mascota.nombre}
         </Link>
       </Card.Title>
       <Card.Text>{props.mascota.descripcion}</Card.Text>
     </Card.Body>
   </Card>
 );
}

export default Mascota;