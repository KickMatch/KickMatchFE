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
    <header>
        <h1>Create a New Athlete Profiile</h1>
      </header>
  );
}

export default RegistrationAthlete;