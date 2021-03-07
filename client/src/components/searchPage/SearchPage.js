import './SearchPage.css';
import { Container } from 'react-bootstrap';
import { useContext } from 'react';
import Loading from '../loading/Loading';
import ResultCard from '../card/ResultCard';
import SiteContext from '../../siteContext/SiteContext';

const SearchPage = () => {

  const { searchResults, googling } = useContext(SiteContext);

  return (
    <Container className='searchResults'>
      {searchResults.length < 1 ?
        googling ? (<Loading />) :
          (<h1>Search for your book</h1>) : googling ?
          (<Loading />) :
          searchResults.map((result) => (
            <ResultCard key={result._id} data={result}/>
          ))
      }
    </Container>
  )
}

export default SearchPage;