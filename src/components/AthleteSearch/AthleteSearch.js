import React from 'react';
import './AthleteSearch.css';
import Header from '../Header/Header';
import { useParams } from 'react-router';


const AthleteSearch = () => {
  const {id} = useParams()
  // console.log('match in search: ', match);
  return (
    <section>
      <Header />
      <h1>athelete search id: {id}</h1>
    </section>
  );
}

export default AthleteSearch;