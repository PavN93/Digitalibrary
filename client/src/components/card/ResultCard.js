import './ResultCard.css';
import { Card, Row, Col, Button } from 'react-bootstrap';
import Loading from '../loading/Loading';


const ResultCard = ({ data, save, saving }) => {
  const { authors, title, description, image, link } = data;
  return (
    <Card>
      <Row>
        <Col md={3} sm={4} className='resultImage'>
          <Card.Img src={image} />
        </Col>
        <Col md={9} sm={8} className='resultData'>
          <Card.Header>
            <Row>
              <Col></Col>
              <Col></Col>
            </Row>
            <h4>{title}</h4>
            {saving ? (<Loading style={{display: "inline-block", float: "right"}}/>) : 
            (<Button variant='outline-success' onClick={() => save(data)}>Save to library</Button>)
            }
            {/* <Button variant='outline-danger'>Remove from library</Button> */}
          </Card.Header>
          <Card.Body>
            <blockquote className='blockquote mb-0'>
              <p>{description && (description)}</p>
              <footer className='blockquote-footer'>
                {authors && (<p>Authors: {authors}</p>)}
                {link ? (<a href={link} target='_blank' rel='noreferrer'>Read more</a>) : (null)}
              </footer>
            </blockquote>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  )
}

export default ResultCard;