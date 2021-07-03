

import React from 'react';
import '../assets/styles/SliderWrapper.css'
 
 const SliderWrapperComponent = ({children}:any) => {
     return(
       <div className='slider-wrapper '>
           {children}
       </div>
     )
}

export default SliderWrapperComponent;