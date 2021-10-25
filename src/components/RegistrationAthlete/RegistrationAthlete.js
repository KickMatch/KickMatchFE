import { StoreWriter } from '@apollo/client/cache/inmemory/writeToStore';
import React, { useState, useEffect } from 'react';
import './RegistrationAthlete.css';

const positionList = ['Goalie', 'Fullback', 'Sweeper/Stopper', 'Center Midfielder', 'Outside Midfielder', 'Striker'];

const talentList = ['Defensive', 'Passing', 'Agility', 'Top Speed', 'Off Ball Movement', 'Taking Free Kicks', 'Taking Corner Kicks', 'Shooting','Leadership', 'Dribbling'];

const RegistrationAthlete = () => {
  const [registrationAthlete, setRegistrationAthlete] = useState({
    name: '', 
    email: '',
    height: 0, 
    weight: 0, 
    age: 0,
    primaryPosition: '',
    secondaryPosition: '',
    dominantFoot: '',
    zipCode: 0,
    goalsMadeLast: 0,
    vertJump: 0.0,
    fortyYard: 0.00,
    personJugRec: 0,
    talents: [],
    awards: '',
  });

  const handleChange = (e) => {
    setRegistrationAthlete(otherState => ({ ...otherState, [e.target.name]: e.target.value}))
  }

  const [checkedTalent, setCheckedTalent] = useState(new Array(talentList.length).fill(false));

  const handleTalent = (position) => {
    const updatedCheckedTalent = checkedTalent.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedTalent(updatedCheckedTalent)
  }

  useEffect(() => {
    let indexTrue = [];

    for (let i = 0; i < checkedTalent.length; i++) {
      checkedTalent[i] && indexTrue.push(i);
    };

    const resultingTalents = indexTrue.map(checked => talentList[checked]).join(', ');

    setRegistrationAthlete(otherState => ({ ...otherState, talents: resultingTalents}));

  }, [checkedTalent]);

  return (
    <section className='registration-athlete-page'>
      <header className='registration-athlete-header'>
        <h1>Create a New Athlete Profile</h1>
      </header>
      <section className='athlete-form'>
        <section className='athlete-stats'>
          <label>Full Name -
            <input type='text' name='firstName' value={registrationAthlete.name} onChange={e => handleChange(e)}></input>
          </label>
          <label>Email - 
            <input type='text' name='email' value={registrationAthlete.email} onChange={e => handleChange(e)}></input>
          </label>
          <label>Height (in) - 
            <input type='number' name='height' value={registrationAthlete.height} onChange={e => handleChange(e)}></input>
          </label>
          <label>Weight (lbs) - 
            <input type='number' name='weight' value={registrationAthlete.weight} onChange={e => handleChange(e)}></input>
          </label>
          <label>Age - 
            <select name='age' value={registrationAthlete.age} onChange={e => handleChange(e)}>
              <option value='8'>8</option>
              <option value='9'>9</option>
              <option value='10'>10</option>
              <option value='11'>11</option>
              <option value='12'>12</option>
              <option value='13'>13</option>
              <option value='14'>14</option>
              <option value='15'>15</option>
              <option value='16'>16</option>
              <option value='17'>17</option>
              <option value='18'>18</option>
            </select>
          </label>
          <label>Primary Position - 
            <select name='primaryPosition' value={registrationAthlete.primaryPosition} onChange={e => handleChange(e)}>
              <option value='' disabled>- Select One-</option>
              {positionList.map((position, index) => <option key={index} value={position}>{position}</option>)}
            </select>
          </label>
          <label>Secondary Position - 
            <select name='secondaryPosition' value={registrationAthlete.secondaryPosition} onChange={e => handleChange(e)}>
              <option value='' disabled>- Select One-</option>
              {positionList.map((position, index) => <option key={index} value={position}>{position}</option>)}
            </select>
          </label>
          <label>Dominant Foot - 
            <select name='dominantFoot' value={registrationAthlete.dominantFoot} onChange={e => handleChange(e)}>
              <option value='' disabled>- Select One-</option>
              <option value='right'>Right</option>
              <option value='left'>Left</option>
              <option value='ambidextrous'>Ambidextrous</option>
            </select>
          </label>
          <label>Zip Code -
            <input type='text' name='zipCode' value={registrationAthlete.zipCode} onChange={e => handleChange(e)}></input>
          </label>
          <label>Goals Made Last Season - 
          <input type='number' name='goalsMadeLast' value={registrationAthlete.goalsMadeLast} onChange={e => handleChange(e)}></input>
          </label>
          <label>Vertical Jump (in) - 
          <input type='number' step='0.1' name='vertJump' value={registrationAthlete.vertJump} onChange={e => handleChange(e)}></input>
          </label>
          <label>40 Yard Dash (sec) - 
          <input type='number' step='0.01' name='fortyYard' value={registrationAthlete.fortyYard} onChange={e => handleChange(e)}></input>
          </label>
          <label>Personal Juggling Record (# of kicks) - 
          <input type='number' name='personJugRec' value={registrationAthlete.personJugRec} onChange={e => handleChange(e)}></input>
          </label>
        </section>
        <label>Talents - Limit to Three
          <div className='talents-container'>
            {talentList.map((talent, index) => <label key={index} className='checkbox-label'> <input type='checkbox' name={talent} value={talent} checked={checkedTalent[index]} onChange={() => handleTalent(index)}></input>{talent}<span></span></label>)}
          </div>
        </label>
        <div className='awards-container'>
        <label>Awards - 
        <input id='awards-input' type='text' name='awards' value={registrationAthlete.awards} onChange={e => handleChange(e)}></input>
        </label>
        </div>
      </section>
    </section>
  );
}

export default RegistrationAthlete;