import './ResultCard.css'
import { Card, Row, Col } from 'react-bootstrap';


const ResultCard = () => {
  return (
    <Card>
      <Row>
        <Col md={3} sm={4} className='resultImage'>
          <Card.Img src='https://picsum.photos/200' />
        </Col>
        <Col md={9} sm={8} className='resultData'>
          <Card.Header>Quote</Card.Header>
          <Card.Body>
            <blockquote className='blockquote mb-0'>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                erat a ante.
                </p>
              <footer className='blockquote-footer'>
                Someone famous in <cite title='Source Title'>Source Title</cite>
              </footer>
            </blockquote>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  )
}

export default ResultCard;