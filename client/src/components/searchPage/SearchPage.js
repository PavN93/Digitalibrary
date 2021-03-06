import './SearchPage.css';
import { Container } from 'react-bootstrap';
import ResultCard from '../card/ResultCard';

const SearchPage = () => {
  return (
    <Container className='searchResults'>
      <ResultCard/>
    </Container>
  )
}

export default SearchPage;