import React from 'react'

import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css';

const MainCerousel= () => {
    
        const items = [
            <img className='cursor-pointer' src='images/one.png'  role="presentation" />,
            <img className='cursor-pointer'  src='images/two.png'  role="presentation" />,
            <img className='cursor-pointer'  src='images/three.png'  role="presentation" />,
            <img className='cursor-pointer'  src='images/four.png'  role="presentation" />,
            <img className='cursor-pointer'  src='images/five.png'  role="presentation" />,
          ];
    

    return (
        
            <AliceCarousel 
        items={items}
           disableButtonsControls
           autoPlay
           autoPlayInterval={1000}
           infinite
             />
       
    )
}

export default MainCerousel