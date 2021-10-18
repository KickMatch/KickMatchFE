import React from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';

import './Error.css';

const Error = () => {
  const history = useHistory()
  
  
  const goBackHandle = () => history.goBack()
  
  return (
    <>
      <h1>Error</h1>
      <button onClick={goBackHandle}>Go Back</button>
      <Link to='/'><button>Go Home</button></Link>
    </>
  );
}

export default Error;