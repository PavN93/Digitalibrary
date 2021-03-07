import './Library.css'
import { Accordion, Card } from 'react-bootstrap';
import ResultCard from '../card/ResultCard';

const Library = ({data}) => {

  return (
      <Accordion>
        {data.map((result) => (
          <Card key={result.id}>
            <Accordion.Toggle as={Card.Header} eventKey={result.id}>
              <h3>{result.title}</h3>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey={result.id}>
              <Card.Body>
                <ResultCard data={result}/>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        ))}
      </Accordion>
  )
}

export default Library;