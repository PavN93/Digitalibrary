import './ResultCard.css';
import { Card, Row, Col, Button } from 'react-bootstrap';
import { useContext, useState } from 'react';
import Loading from '../loading/Loading';
import SiteContext from '../../siteContext/SiteContext';

const ResultCard = ({ data }) => {
  const { _id, authors, title, description, image, link } = data;
  const { fetchDbResults, dbLibrary } = useContext(SiteContext);
  const [queryInProgress, setQueryInProgress] = useState(false);
  
  const saveBookToDb = async (data) => {
    setQueryInProgress(true);
    try {
      await fetch('/api/books', {
        method: 'POST',
        headers: { 'content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      await fetchDbResults();
    } catch (err) {
      console.log('Error on save:', err)
    }
    setQueryInProgress(false);
  }

  const deleteFromDb = async (id) => {
    setQueryInProgress(true);
    try {
      await fetch(`/api/books/${id}`, {
        method: 'DELETE',
      })
      await fetchDbResults();
    } catch (err) {
      console.log('Error on delete:', err);
    }
    setQueryInProgress(false);
  }

  return (
    <Card>
      <Row>
        <Col md={3} sm={4} className='resultImage'>
          <Card.Img src={image} />
        </Col>
        <Col md={9} sm={8} className='resultData'>
          <Card.Header>
            <Row>
              <Col sm={12} md={10}>
                <h4>{title}</h4>
              </Col>
              <Col sm={12} md={2}>

                {queryInProgress ? (<Loading />) :
                dbLibrary.some(book => book._id === _id) ?
                (<Button variant='outline-danger' onClick={() => deleteFromDb(_id)}>Remove</Button>) :
                (<Button variant='outline-success' onClick={() => saveBookToDb(data)}>Save</Button>)
                //   (<Button variant='outline-success' onClick={() => saveBookToDb(data)}>Save</Button>)
                // }
                // <Button variant='outline-danger' onClick={() => deleteFromDb(_id)}>Remove</Button>
                }
              </Col>
            </Row>
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