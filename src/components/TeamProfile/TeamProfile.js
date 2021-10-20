import React from 'react';
import './TeamProfile.css';

const TeamProfile = () => {

  
  return (
    <section className='teamProfile'>
      <div className='teamContactInfo'>
        <p>IMG</p>
        <p><b>Team Name:</b></p>
        <p>F.C. Denver</p>
        <p><b>Location:</b></p>
        <p>1730 Blake St - Denver, CO, 80220</p>
        <p><b>Contact Info:</b></p>
        <p><i>Email:</i> fc.denver@gmail.com</p>
        <p><i>Phone:</i> 722-223-2365</p>
      </div>
      <div className='teamSportingInfo'>
        <p><b>League:</b></p>
          <p><i>US Football League</i></p>
        <p><b>Tournaments:</b></p>
          <p><i>US Football Tourmanet</i></p>
        <p><b>Couch Resume:</b></p>
          <p>Tim Nord: For more than 20 years as a Football Coach for multiple teams around the country, he is our main couch</p>
        <p><b>Currently Looking:</b></p>
          <p><i>Goalkeeper</i></p>
          <p><i>Center Left</i></p>
          <p><i>Foward Right</i></p>
      </div>
    </section>
  );
}

export default TeamProfile;