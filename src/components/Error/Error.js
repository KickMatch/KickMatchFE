import React from 'react';
import { useHistory } from 'react-router';
import './Error.css';

const Error = ({ message, page }) => {
  const history = useHistory()
  
  return (
    <div className='error-container'>
      {page && <h2 className='error-heading'>We've encountered an error in retrieving the {page}.</h2>}
      <p className='error-message'>{message}</p>
      <iframe title="errorFrame" className='error' src="https://giphy.com/embed/qxYkv4GuyYbbG"></iframe>
      <button onClick={e => history.goBack()}>Go Back</button>
    </div>
  );
}

export default Error;