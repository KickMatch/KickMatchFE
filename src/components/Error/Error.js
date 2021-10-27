import React from 'react';
import { useHistory } from 'react-router';
import Header from '../Header/Header';
import './Error.css';

const Error = ( ) => {
  const history = useHistory()
  
  return (
    <>
    <Header />
    <div className='error-container'>
      <h2 style={{'color':'white'}} className='error-message'>There is a probelm accessing this page, please check your URL or go back.</h2>
      <iframe title="errorFrame" className='error' src="https://giphy.com/embed/qxYkv4GuyYbbG"></iframe>
      <button onClick={e => history.goBack()}>Go Back</button>
    </div>
    </>
  );
}

export default Error;