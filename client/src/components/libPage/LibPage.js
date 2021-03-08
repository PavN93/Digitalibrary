import './LibPage.css'
import { useContext } from 'react';
import SiteContext from '../../siteContext/SiteContext';
import { Container } from 'react-bootstrap';
import Library from '../library/Library';
import Loading from '../loading/Loading';

const LibPage = () => {

  const { dbFetching, dbLibrary } = useContext(SiteContext);

  // useEffect(() => {
  //   (async () => {
  //     await fetchDbResults();
  //   })();
  // }, [])

  return (
    <Container className='library'>
      {dbLibrary.length < 1 ?
        dbFetching ? (<Loading />) :
          (<h1>No books saved!</h1>) : dbFetching ?
          (<Loading />) :
          <Library data={dbLibrary} />
      }
    </Container>
  )
}

export default LibPage;