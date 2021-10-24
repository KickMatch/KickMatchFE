import React from 'react';
import './TeamProfileContainer.css';
import TeamProfile from '../TeamProfile/TeamProfile';
import Carousel from 'react-elastic-carousel';

const TeamProfileContainer = ({filteredTeams, getId}) => {

  const renderTeamsProfiles = () => {
    const teamsProfile = filteredTeams.map(teamInfo => {
      return(
        <TeamProfile teamInfo={teamInfo} getId={getId}/>
      )
    })
    return (
      <Carousel className="matchCarousel">
        {teamsProfile}
      </Carousel>
    )
  }
  
  return (
    <section className='TeamProfileContainer'>
      {filteredTeams ? renderTeamsProfiles() : <h2>Sorry no teams find it !</h2>}
      {/* {renderTeamsProfiles()} */}
    </section>
  );
}

export default TeamProfileContainer;