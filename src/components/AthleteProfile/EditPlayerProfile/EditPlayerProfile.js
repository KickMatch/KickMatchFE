import React from 'react';
// import './AthleteProfile.css';
// import Header from '../Header/Header';
import { useParams } from 'react-router';

const EditPlayerProfile = ( ) => {

  const {id} = useParams()

  return (
    <>
      <h1>EditPlayerProfile</h1>
    </>
  );
}

export default EditPlayerProfile;