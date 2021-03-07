import { Spinner } from "react-bootstrap";
import './Loading.css';

const Loading = ({ size }) => {
  return (
    <div className='loading'>
      <Spinner
        animation="border"
        variant="warning"
        // size={size}
      />
    </div>
  )
}

export default Loading;