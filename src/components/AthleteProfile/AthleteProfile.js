import './AthleteProfile.css';
import Header from '../Header/Header';
import CarouselComp from '../Carousel/Carousel';

const AthleteProfile = ({ children }) => {
  

  return (
    <>
      <Header />
      <main>
        {children}
        <div className='divider'></div>
        <CarouselComp />
      </main>

    </>
  );
}

export default AthleteProfile;