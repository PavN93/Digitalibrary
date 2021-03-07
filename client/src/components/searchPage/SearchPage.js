import './SearchPage.css';
import { Container } from 'react-bootstrap';
import { useContext, useState } from 'react';
import Loading from '../loading/Loading';
import ResultCard from '../card/ResultCard';
import SiteContext from '../../siteContext/SiteContext';

const SearchPage = () => {

  const { searchResults, googling } = useContext(SiteContext);
  const [ saving, setSaving ] = useState(false);

  const saveBookToDb = async (data) => {
    setSaving(true);
    try {
      const response = await fetch( '/api/books', {
        method: 'POST',
        headers: { 'content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const payload = await response.json();
      console.log(payload);
    } catch (err) {
      console.log('Error on save:', err)
    }
    setSaving(false);
  }


  return (
    <Container className='searchResults'>
      {searchResults.length < 1 ?
        googling ? (<Loading />) :
          (<h1>Search for your book</h1>) : googling ?
          (<Loading />) :
          searchResults.map((result) => (
            <ResultCard key={result._id} data={result} save={saveBookToDb} saving={saving}/>
          ))
      }
    </Container>
  )
}

export default SearchPage;