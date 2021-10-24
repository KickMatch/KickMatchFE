import { StoreWriter } from '@apollo/client/cache/inmemory/writeToStore';
import React, { useState, useEffect } from 'react';
import './RegistrationTeam.css';

const positionList = ['Goalie', 'Fullback', 'Sweeper/Stopper', 'Center Midfielder', 'Outside Midfielder', 'Striker'];

const states = ['AL', 'AK', 'AS', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FM', 'FL', 'GA', 'GU', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MH', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'MP', 'OH', 'OK', 'OR', 'PW', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VI', 'VA', 'WA', 'WV', 'WI', 'WY'];

const RegistrationTeam = () => {
  const [registrationTeam, setRegistrationTeam] = useState({
    name: '',
    location: '',
    email: '',
    phone: '',
    league: '',
    tournaments: '',
    coachResume: '',
    positionsOpen: [],
  });

  const [address, setAddress] = useState({
    street: '',
    city: '',
    state: '',
    zipCode: '',
  }); 

  useEffect(() => {
    setRegistrationTeam(otherState => ({ ...otherState, location: `${address.street} ${address.city}, ${address.state} ${address.zipCode}`}))
  }, [address])

  
  const [checkedPosition, setCheckedPosition] = useState(new Array(positionList.length).fill(false))

  const handlePosition = (spot) => {
    const updatedCheckedPosition = checkedPosition.map((item, index) =>
      index === spot ? !item : item
    );

    setCheckedPosition(updatedCheckedPosition)
  }

  const handleAddress = (e) => {
    setAddress(otherState => ({ ...otherState, [e.target.name]: e.target.value}))
  }

  const handleChange = (e) => {
    setRegistrationTeam(otherState => ({ ...otherState, [e.target.name]: e.target.value}))
  }

  return (
    <section className='registration-team-page'>
      <header>
        <h1>Create a New Team Profile</h1>
      </header>
      <section className='team-form'>
        <label>Team Name -
          <input type='text' name='name' value={registrationTeam.name} onChange={e => handleChange(e)}></input>
        </label>
        <label>Street - 
          <input type='text' name='street' value={address.street} onChange={e => handleAddress(e)}></input>
        </label>
        <label>City - 
          <input type='text' name='city' value={address.city} onChange={e => handleAddress(e)}></input>
        </label>
        <label>State - 
          <select name='state' value={address.state} onChange={e => handleAddress(e)}>
            <option value='' disabled>- Select One-</option>
            {states.map((state, index) => <option key={index} value={state}>{state}</option>)}
          </select>
        </label>
        <label>Zip Code -
          <input type='text' name='zipCode' value={address.zipCode} onChange={e => handleAddress(e)}></input>
        </label>
        
      </section>
    </section>
  );
}

export default RegistrationTeam;