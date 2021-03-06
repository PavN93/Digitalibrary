import { BrowserRouter as Router, Route } from 'react-router-dom';
import LibPage from './libPage/LibPage';
import SearchPage from './searchPage/SearchPage';
import Header from './header/Header';

const Routed = () => {
  return (
    <Router basename='/'>
      <Header />
      <Route exact path='/' component={LibPage}/>
      <Route exact path='/lib' component={LibPage}/>
      <Route exact path='/search' component={SearchPage}/>
    </Router>
  )
}

export default Routed;