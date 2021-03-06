import './LibPage.css'
import { Container } from 'react-bootstrap';
import Library from '../library/Library'

const LibPage = () => {
  return (
    <Container className='library'>
      <Library/>
    </Container>
  )
}

export default LibPage;