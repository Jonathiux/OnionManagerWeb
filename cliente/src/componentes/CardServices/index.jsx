import './index.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function getServicios({nombreS, descripcion, img }){
  return(
    <Card className='Cards' style={{ width: '18px' }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{nombreS}</Card.Title>
        <Card.Text>
          {descripcion}
        </Card.Text>
        <Button className='ButtonS'>Leer más</Button>
      </Card.Body>
    </Card>
  )
}

