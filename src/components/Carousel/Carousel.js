import React from 'react';
import soccer from '../../assets/soccer4.png'
import soccer1 from '../../assets/soccer1.png'
import soccer2 from '../../assets/soccer2.png'
import soccer3 from '../../assets/soccer3.png'
import { Carousel } from 'react-responsive-carousel';
import './Carousel.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; 

const CarouselComp = () => {

  const images = [soccer1, soccer2, soccer3, soccer]
  const onClickItem = (e) => {
    console.log('onClickItem invoked: ', e)
  }

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
    }

export default CarouselComp
// Don't forget to include the css in your page 
// <link rel="stylesheet" href="carousel.css"/>
// Begin DemoSliderControls
{/* <div>
                    <img className='caro-img' src={soccer1} />
                </div>
                <div>
                    <img className='caro-img' src={soccer2} />
                </div>
                <div>
                    <img className='caro-img' src={soccer3} />
                </div>
                <div>
                    <img className='caro-img' src={soccer4} />
                </div> */}