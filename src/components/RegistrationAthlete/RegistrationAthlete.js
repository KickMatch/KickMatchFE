import React from 'react';
import './RegistrationAthlete.css';

const talentList = ['Defensive', 'Passing', 'Agility', 'Top Speed', 'Off Ball Movement', 'Taking Free Kicks', 'Taking Corner Kicks', 'Shooting','Leadership', 'Dribbling'];

const RegistrationAthlete = () => {
  const [registration, setRegistration] = useState({
    firstName: '', 
    lastName: '', 
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
    awards: '',
  });

  const [talents, setTalents] = useState([]);

  const handleChange = (e) => {
    setRegistration(otherState => ({ ...otherState, [e.target.name]: e.target.value}))
  }

  const handleTalent = (e) => {
    if (talents.length < 3) {
      setTalents([e.target.value, ...talents])
    }
  }
  
  return (
    <section className='registration-page'>
      <header>
        <h1>Create a New Athlete Profiile</h1>
      </header>
      <section className='form'>
        <label>First Name -
          <input type='text' name='firstName' value={registration.firstName} onChange={e => handleChange(e)}></input>
        </label>
        <label>Last Name - 
          <input type='text' name='lastName' value={registration.lastName} onChange={e => handleChange(e)}></input>
        </label>
        <label>Email - 
          <input type='email' name='email' value={registration.email} onChange={e => handleChange(e)}></input>
        </label>
        <label>Height (in) - 
          <input type='number' name='height' value={registration.hweighteight} onChange={e => handleChange(e)}></input>
        </label>
        <label>Weight (lbs) - 
          <input type='number' name='weight' value={registration.weight} onChange={e => handleChange(e)}></input>
        </label>
        <label>Age - 
          <select name='age' value={registration.age} onChange={e => handleChange(e)}>
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
          <select name='primaryPosition' value={registration.primaryPosition} onChange={e => handleChange(e)}>
            <option value='goalie'>Goalie</option>
            <option value='fullback'>Fullback</option>
            <option value='sweeper/stopper'>Sweeper/Stopper</option>
            <option value='centerMid'>Center Midfielder</option>
            <option value='outsideMid'>Outside Midfielder</option>
            <option value='striker'>Striker</option>
          </select>
        </label>
        <label>Secondary Position - 
        <select name='secondaryPosition' value={registration.secondaryPosition} onChange={e => handleChange(e)}>
          <option value=''>- Select One-</option>
          <option value='goalie'>Goalie</option>
          <option value='fullback'>Fullback</option>
          <option value='sweeper/stopper'>Sweeper/Stopper</option>
          <option value='centerMid'>Center Midfielder</option>
          <option value='outsideMid'>Outside Midfielder</option>
          <option value='striker'>Striker</option>
        </select>
        </label>
        <label>Dominant Foot - 
          <select name='dominantFoot' value={registration.dominantFoot} onChange={e => handleChange(e)}>
            <option value=''>- Select One-</option>
            <option value='right'>Right</option>
            <option value='left'>Left</option>
            <option value='ambidextrous'>Ambidextrous</option>
          </select>
        </label>
        <label>Goals Made Last Season - 
        <input type='number' name='goalsMadeLast' value={registration.goalsMadeLast} onChange={e => handleChange(e)}></input>
        </label>
        <label>Vertical Jump (in) - 
        <input type='number' step='0.1' name='vertJump' value={registration.vertJump} onChange={e => handleChange(e)}></input>
        </label>
        <label>40 Yard Dash (sec) - 
        <input type='number' step='0.01' name='fortyYard' value={registration.fortyYard} onChange={e => handleChange(e)}></input>
        </label>
        <label>Personal Juggling Record (# of kicks) - 
        <input type='number' name='personJugRec' value={registration.personJugRec} onChange={e => handleChange(e)}></input>
        </label>
        
    </section>
  );
}

export default RegistrationAthlete;