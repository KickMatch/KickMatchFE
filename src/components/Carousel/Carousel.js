import React from 'react';
import soccer1 from '../../assets/soccer1.png'
import soccer2 from '../../assets/soccer2.png'
import soccer3 from '../../assets/soccer3.png'
import soccer4 from '../../assets/soccer4.png'
import './Carousel.css'
import { Carousel } from 'react-responsive-carousel';

const CarouselComp = () => {

  const onChange = () => {
    console.log('onChange invoked')
  }

  const onClickItem = () => {
    console.log('onClickItem invoked')
  }

  const onClickThumb = () => {
    console.log('onClickThumb invoked')
  }

  // showArrows={true} onChange={onChange} onClickItem={onClickItem} onClickThumb={onClickThumb}
        return (
          <aside className='caro-container'>
              <Carousel showArrows={true} onChange={onChange} onClickItem={onClickItem} onClickThumb={onClickThumb}>
                  <div>
                      <img className='caro-img' src={soccer1} />
                      <p className="legend">Legend 1</p>
                  </div>
                  <div>
                      <img className='caro-img' src={soccer2} />
                      <p className="legend">Legend 2</p>
                  </div>
                  <div>
                      <img className='caro-img' src={soccer3} />
                      <p className="legend">Legend 3</p>
                  </div>
                  <div>
                      <img className='caro-img' src={soccer4} />
                      <p className="legend">Legend 4</p>
                  </div>
              </Carousel>
            </aside>
        );
    }

export default CarouselComp
// Don't forget to include the css in your page 
// <link rel="stylesheet" href="carousel.css"/>
// Begin DemoSliderControls