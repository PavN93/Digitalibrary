import './Library.css'
import { Accordion, Card } from 'react-bootstrap';
import ResultCard from '../card/ResultCard'

const Library = () => {
  return (
    <Accordion>
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey='0'>
          <h3>Book title</h3>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey='0'>
          <Card.Body>
            <ResultCard />
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  )
}

export default Library;