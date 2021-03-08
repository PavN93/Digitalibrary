import './App.css';
import Routed from "./components/Routed";
import { useEffect, useContext } from 'react';
import SiteContext from './siteContext/SiteContext';

const App = () => {
 const { fetchDbResults } = useContext(SiteContext);

  useEffect(() => {
    (async () => {
      await fetchDbResults();
    })();
  }, [])

  return (
    <Routed/>
  )
}

export default App;