import React from 'react'
import About from './Page Sections/About'
import Brands from './Page Sections/Brands'
import Testimonials from './Page Sections/Testimonials';
import Work from './Page Sections/Work';

const ScrollAnimation = () => {
  return (
    <div className='animation-container'>
<div className='video slide'></div>
<div className='about slide'>
    <About/>
</div>
<div className='brands slide'>
    <Brands/>
</div>
<div className='testimonials slide'>
  <Testimonials />
</div>
<div className='work slide'>
  <Work />
</div>
    </div>
  )
}

export default ScrollAnimation;