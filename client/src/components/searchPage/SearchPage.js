import './SearchPage.css';
import { Container } from 'react-bootstrap';
import ResultCard from '../card/ResultCard';
import SiteContext from '../../siteContext/SiteContext';
import { useContext } from 'react';

const SearchPage = () => {
  const { searchResults, fetchResults } = useContext(SiteContext);
  console.log(searchResults);
  return (
    <Container className='searchResults'>
      <ResultCard/>
    </Container>
  )
}

export default SearchPage;