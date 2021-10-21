import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import './Carousel.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 

const CarouselComp = ({ data }) => {
  
  const { images } = data

  const onClickItem = e => console.log('onClickItem invoked: ', e);

  return (
    <>
      <Carousel interval={5000} autoPlay={true} centerMode={true} centerSlidePercentage={50} infiniteLoop={true} showThumbs={false} className='main-slide' showArrows={true} onClickItem={e => onClickItem(e)}>
          {
            images.map((image, index) => {
              return(
                <div key={index}>
                  <img className='caro-img' src={image} />
                </div>
              )
            })
          }
      </Carousel>
    </>
  );
};

export default CarouselComp;