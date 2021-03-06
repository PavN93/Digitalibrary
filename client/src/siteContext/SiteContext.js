import { useState, createContext } from 'react';

const SiteContext = createContext();

const SiteContextProvider = ({ children }) => {
  const [ searchResults, setSearchResults] = useState([]);

  const fetchResults = async (url) => {
    try {
      const response = await fetch(url);
      const payload = await response.json();
      console.log(payload);
      // setSearchResults(payload);
    } catch (err) {
      console.log('Error on fetch:', error);
      throw err;
    }
  }

  return (
    <SiteContext.Provider value={{ searchResults, fetchResults }}>
      {children}
    </SiteContext.Provider>
  )
}

export default SiteContext;
export { SiteContextProvider };