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
      console.log(payload.items);
      setSearchResults(payload.items);
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