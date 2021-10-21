import './AthleteProfile.css';
import Header from '../Header/Header';
import CarouselComp from '../Carousel/Carousel';
import AthleteStatContainer from '../AthleteStatContainer/AthleteStatContainer';
import Bio from '../Bio/Bio';

const AthleteProfile = ({ data }) => {
  

  return (
    <>
      <Header />
      <main>
        <AthleteStatContainer athlete={data} />
        <div className='divider'></div>
        <CarouselComp data={data}/>
        <div className='divider'></div>
        <Bio data={data} />
      </main>

    </>
  );
}

export default AthleteProfile;