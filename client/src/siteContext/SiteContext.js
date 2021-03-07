import { useState, createContext } from 'react';

const SiteContext = createContext();

const SiteContextProvider = ({ children }) => {

  // value of the navbar search bar
  const [inputValue, setInputValue] = useState('');

  // results from google books api
  const [searchResults, setSearchResults] = useState([]);

  // boolean for google books fetching in progress
  const [googling, setGoogling] = useState(false);

  // latest response from db with its results
  const [dbLibrary, setDbLibrary] = useState([]);

  // boolean for db fetching in progress
  const [dbFetching, setDbFetching] = useState(false);

  const handleFetchGoogleApi = async () => {
    try {
      setGoogling(true)
      const url = `https://www.googleapis.com/books/v1/volumes?q=${inputValue.split(' ').join('+')}`;
      const response = await fetch(url);
      const payload = await response.json();
      const neededBooksData = [];
      for (const result of payload.items){
        const filteredData = {
          id: result.id,
          authors: result.volumeInfo.authors,
          title: result.volumeInfo.title,
          description: result.volumeInfo.description,
          image: result.volumeInfo.imageLinks.thumbnail,
          link: result.volumeInfo.infoLink
        };
        neededBooksData.push(filteredData);
      }

      setSearchResults(neededBooksData);
      setGoogling(false);
    } catch (err) {
      console.log('Error on googling:', err);
    }
  }

  const fetchDbResults = async () => {
    try {
      setDbFetching(true);
      const response = await fetch('/books');
      const payload = await response.json();
      console.log('db content:', payload);
      setDbFetching(false);
      // setDbLibrary(payload);
    } catch (err) {
      console.log('Error on DB query:', err);
    }
  }

  return (
    <SiteContext.Provider value={{
      searchResults,
      handleFetchGoogleApi,
      inputValue,
      setInputValue,
      googling,
      dbFetching,
      fetchDbResults,
      dbLibrary
    }}>
      {children}
    </SiteContext.Provider>
  )
}

export default SiteContext;
export { SiteContextProvider };