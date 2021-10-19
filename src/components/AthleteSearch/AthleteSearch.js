import './AthleteSearch.css';
import React from 'react';
import Header from '../Header/Header';
import { useParams } from 'react-router';
import { useState } from 'react';


const AthleteSearch = () => {
  const {id} = useParams();
  const [teamName, setTeamName] = useState("");
  const [teamLocation, setTeamLocation] = useState("");

  const getFormInfo = (event) => {
    event.preventDefault();
    console.log(teamName);
    console.log(teamLocation)
    clearInputs();
  }

  const clearInputs = () => {
    setTeamLocation("");
    setTeamName("");
  }

  return (
    <section>
      <Header />
      <section className='AthleteSearch'>
        <form className='AthleteForm'>
          <h3>Search by:</h3>
          <input
            type='text'
            placeholder='Sport Club Name'
            name='sportClub'
            value={teamName}
            onChange={(event) => setTeamName(event.target.value)}
          />
          <select onChange={(event) => setTeamLocation(event.target.value)}>
            <option value='20'>20 Miles</option>
            <option value='50'>50 Miles</option>
            <option value='100'>100 Miles</option>
            <option value='150'>150 or more</option>
          </select>
          <button className='SearchBtn' onClick={getFormInfo}>Search Teams</button>
        </form>
        <div className='SearchedTeamsContainer'>
          <h3>This is where the Team Component and carousel should be</h3>
        </div>
      </section>
    </section>
  );
}

export default AthleteSearch;