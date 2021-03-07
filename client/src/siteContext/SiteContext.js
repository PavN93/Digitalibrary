import { useState, createContext } from 'react';

const SiteContext = createContext();

const SiteContextProvider = ({ children }) => {
  const [searchResults, setSearchResults] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const fetchResults = async () => {
    try {
      const url = `https://www.googleapis.com/books/v1/volumes?q=${inputValue}`;
      const response = await fetch(url);
      const payload = await response.json();
      console.log('from google:', payload.items);
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
    } catch (err) {
      console.log('Error on fetch:', err);
      throw err;
    }
  }

  return (
    <SiteContext.Provider value={{
      searchResults,
      fetchResults,
      inputValue,
      setInputValue
    }}>
      {children}
    </SiteContext.Provider>
  )
}

export default SiteContext;
export { SiteContextProvider };