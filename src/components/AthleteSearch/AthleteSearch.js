import React from 'react';
import './AthleteSearch.css';
import Header from '../Header/Header';
import { useParams } from 'react-router';


const AthleteSearch = () => {
  const {id} = useParams()
  return (
    <section class='AthleteSearch'>
      <form class='AthleteForm'>
        <h3>Search by:</h3>
        <input
          type='text'
          placeholder='Sport Club Name'
          name='sportClub'
          // value={sportClubName}
        />
        <select>
          <option>20 Miles</option>
          <option>50 Miles</option>
          <option>100 Miles</option>
          <option>150 or more</option>
        </select>
        <button className='SearchBtn'>Search Teams</button>
      </form>
      <div className='SearchedTeamsContainer'>
        <h3>This is where the Team Component and carousel should be</h3>
      </div>
    </section>
  );
}

export default AthleteSearch;