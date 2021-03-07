import './SearchPage.css';
import { Container } from 'react-bootstrap';
import ResultCard from '../card/ResultCard';
import SiteContext from '../../siteContext/SiteContext';
import { useContext } from 'react';

const SearchPage = () => {

  const { searchResults } = useContext(SiteContext);

  return (
    <Container className='searchResults'>
      {searchResults.map((result) => (
        <ResultCard data={result}/>
      ))}
      <ResultCard/>
    </Container>
  )
}

export default SearchPage;