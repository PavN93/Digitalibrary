import './LibPage.css'
import { Accordion, Card, Container } from "react-bootstrap";

const LibPage = () => {
  return (
    <Container className="library">
      <Accordion defaultActiveKey="0">
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="0">
            Click me!
    </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body>asg afsg adfsg adfg sdfatgseratg adfssgasertygh </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="1">
            Click me!
    </Accordion.Toggle>
          <Accordion.Collapse eventKey="1">
            <Card.Body>asg afsg adfsg adfg sdfatgseratg adfssgasertyghasg afsg adfsg adfg sdfatgseratg adfssgasertyghasg afsg adfsg adfg sdfatgseratg adfssgasertyghasg afsg adfsg adfg sdfatgseratg adfssgasertyghasg afsg adfsg adfg sdfatgseratg adfssgasertyghasg afsg adfsg adfg sdfatgseratg adfssgasertyghasg afsg adfsg adfg sdfatgseratg adfssgasertygh</Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="2">
            Click me!
    </Accordion.Toggle>
          <Accordion.Collapse eventKey="2">
            <Card.Body>asg afsg adfsg adfg sdfatgseratg adfssgasertyghasg afsg adfsg adfg sdfatgseratg adfssgasertyghasg afsg adfsg adfg sdfatgseratg adfssgasertygh</Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="3">
            Click me!
    </Accordion.Toggle>
          <Accordion.Collapse eventKey="3">
            <Card.Body>asg afsg adfsg adfg sdfatgseratg adfssgasertyghasg afsg adfsg adfg sdfatgseratg adfssgasertyghasg afsg adfsg adfg sdfatgseratg adfssgasertyghasg afsg adfsg adfg sdfatgseratg adfssgasertyghasg afsg adfsg adfg sdfatgseratg adfssgasertyghasg afsg adfsg adfg sdfatgseratg adfssgasertyghasg afsg adfsg adfg sdfatgseratg adfssgasertyghasg afsg adfsg adfg sdfatgseratg adfssgasertyghy</Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </Container>
  )
}

export default LibPage;