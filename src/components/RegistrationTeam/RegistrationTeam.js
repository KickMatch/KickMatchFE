import React, { useState, useEffect } from 'react';
import './RegistrationTeam.css';

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

  const positionList = ['Goalie', 'Fullback', 'Sweeper/Stopper', 'Center Midfielder', 'Outside Midfielder', 'Striker'];

  const states = ['AL', 'AK', 'AS', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FM', 'FL', 'GA', 'GU', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MH', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'MP', 'OH', 'OK', 'OR', 'PW', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VI', 'VA', 'WA', 'WV', 'WI', 'WY'];

  const handleChange = (e) => {
    setRegistrationTeam(otherState => ({ ...otherState, [e.target.name]: e.target.value}));
  }

  const handleAddress = (e) => {
    setAddress(otherState => ({ ...otherState, [e.target.name]: e.target.value}));
  }

  useEffect(() => {
    setRegistrationTeam(otherState => ({ ...otherState, location: `${address.street} ${address.city}, ${address.state} ${address.zipCode}`}));
  }, [address]);

  const [checkedPosition, setCheckedPosition] = useState(new Array(positionList.length).fill(false))

  const handlePosition = (spot) => {
    const updatedCheckedPosition = checkedPosition.map((item, index) =>
      index === spot ? !item : item
    );

    setCheckedPosition(updatedCheckedPosition)
  }

  useEffect(() => {
    let indexTrue = [];

    for (let i = 0; i < checkedPosition.length; i++) {
      checkedPosition[i] && indexTrue.push(i);
    };

    const resultingPositions = indexTrue.map(checked => positionList[checked]).join(', ');

    setRegistrationTeam(otherState => ({ ...otherState, positionsOpen: resultingPositions}));

  }, [checkedPosition]);

  return (
    <section className='registration-team-page'>
      <header className='registration-team-header'>
        <h1 className='registration-team-heading'>Create a New Team Profile</h1>
      </header>
      <section className='team-form'>
        <section className='athlete-stats'>
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
          <label>Email - 
            <input type='text' name='email' value={registrationTeam.email} onChange={e => handleChange(e)}></input>
          </label>
          <label>Phone Number - 
            <input type='text' name='phone' value={registrationTeam.phone} onChange={e => handleChange(e)}></input>
          </label>
          <label>League - 
            <input type='text' name='league' value={registrationTeam.league} onChange={e => handleChange(e)}></input>
          </label>
          <label>Tournaments - 
            <input type='text' name='tournaments' value={registrationTeam.tournaments} onChange={e => handleChange(e)}></input>
          </label>
          <label>Coach Resume - 
            <input type='text' name='coachResume' value={registrationTeam.coachResume} onChange={e => handleChange(e)}></input>
          </label>
        </section>
        <label>Positions Open -
          <div className='positions-container'>
            {positionList.map((position, index) => <label className='checkbox-label'><input type='checkbox' name={position} value={position} checked={checkedPosition[index]} onChange={() => handlePosition(index)}></input>{position}<span></span></label>)}
          </div>
        </label>
        {registrationTeam.name && registrationTeam.location && registrationTeam.email && registrationTeam.phone && registrationTeam.league && registrationTeam.tournaments && registrationTeam.coachResume && registrationTeam.positionsOpen
        ? <button className='register-button' /*onSubmit={registerTeam}*/>Register</button> 
        : 
          <>
            <button className='register-button' disabled>Register</button>
            <p className='not-completed' >All fields must be completed.</p>
          </>
        } 
      </section>
    </section>
  );
}

export default RegistrationTeam;