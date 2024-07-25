import '../App.css'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import tienda from '../assets/tienda.jpg'
import next from '../assets/skills/next-js.svg'
import faceRecovery from '../assets/face-recovery.jpg'
import react from '../assets/skills/react.svg'
import python from '../assets/skills/python.svg'
import vite from '../assets/skills/brand-vite.svg'
import gcp from '../assets/skills/google-cloud.svg'
import docker from '../assets/skills/docker.svg'
import html from '../assets/skills/file-type-html.svg'
import css from '../assets/skills/file-type-css.svg'
import fastapi from '../assets/skills/fastapi.svg'
import YouTube from 'react-youtube'
import arduino from '../assets/skills/arduino.svg'

function Proyecto(props) {  
  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      // https://youtu.be/votS5KqadC8
      autoplay: 1,
    },
  };

return (
    <section className='proyects-section'>
    <Card  className='cardContent'>
    <Card.Img variant="top" src={tienda} className='video3' />
    <div className='card-desc-cont1'>
    <Card.Body className='descripcion3'>
      <Card.Title>Prototipo de E-commerce</Card.Title>
      <Card.Text>
        Ejercicio de tienda virtual; desarrollada con el fin de poner en práctica, <br/>
        métodos y herramientas de Next.js; tales como: Hooks, SearchParms, Client y<br/>
        Server components, etc; ademas, esta posee autenticación con Auth0 y <br/>
        componentes de Taiwind
      </Card.Text>
    </Card.Body>
    <ListGroup className="proycontent3">
        <Card.Img variant="top" src={next} className='skillicon' />
        <Card.Img variant="top" src={react} className='skillicon' />
        <Card.Img variant="top" src={html} className='skillicon' />
        <Card.Img variant="top" src={css} className='skillicon' />
       
    </ListGroup>
    <Card.Body className='proycontent3'>
      <Card.Link className='h1S'  href="https://ecommerce-next-khaki.vercel.app/" target="_blank">Página web</Card.Link>
      <Card.Link className='h1S'  href="https://github.com/Juan0496/Ecommerce-next.git" target="_blank">Repositorio</Card.Link>
    </Card.Body>
    </div>
    </Card>
    <Card  className='cardContent'>
      <Card.Img variant="top" src={faceRecovery} className='video3' />
      <div className="card-desc-cont1">
    <Card.Body className='descripcion3'>
      <Card.Title>Covered Face Detector</Card.Title>
      <Card.Text>
        Aplicación web, que detecta tres estados de imagen; mediante un modelo de IA, <br/>
        entrenada utilizando redes neuronales convolucionales en python; asimismo, <br/>
        se utilizó docker para su despliegue en GCP. Finalmente, la intefaz de usuario <br/>
        fue elaborada en React.
      </Card.Text>
    </Card.Body>
    <ListGroup className="proycontent3">
        <Card.Img variant="top" src={vite} className='skillicon' />
        <Card.Img variant="top" src={react} className='skillicon' />
        <Card.Img variant="top" src={python} className='skillicon' />
        <Card.Img variant="top" src={gcp} className='skillicon' />
        <Card.Img variant="top" src={docker} className='skillicon' />
    </ListGroup>
    <Card.Body className='proycontent3'>
      <Card.Link className='h1S'  href="https://client-face-recog.vercel.app/" target="_blank">Página web</Card.Link>
      <Card.Link className='h1S'  href="https://github.com/Juan0496/Client-FaceRecog.git" target="_blank">Repositorio</Card.Link>
    </Card.Body>   
    </div>
   </Card>

   <Card className='cardContent2'>
    <div className='card-img-cont'>
      <YouTube  videoId='votS5KqadC8' opts={opts} className='video' />
    </div>
    <div className='card-desc-cont'>
    <Card.Body className='descripcion3'>
      <Card.Title>Face detection app</Card.Title>
      <Card.Text>
        Aplicación movil, elaborada con React Native, vinculada a un servidor <br/>
        FastApi; en el cúal, se realiza un proceso de deteccion de rostros; y con <br/>
        quien se establece comunicación via Websocket. Además, está también se <br/>
        comunica vía mqtt, con un Esp32, donde se realiza la activación de un led<br/>
        que simula una alarma. La app contiene autenticación con firebase. 
      </Card.Text>
    </Card.Body>
    <ListGroup className="proycontent3">
        
        <Card.Img  src={react} className='skillicon' />
        <Card.Img  src={python} className='skillicon' />
        <Card.Img  src={fastapi} className='skillicon' />
        <Card.Img  src={arduino} className='skillicon' />
        
    </ListGroup>
    <Card.Body className='proycontent3'>
      
      <Card.Link className='h1S'  href="https://github.com/Juan0496/App-FaceRecognition.git" target="_blank">Repositorio</Card.Link>
    </Card.Body>
    </div>
   </Card>
   </section>
  )
}
export default Proyecto