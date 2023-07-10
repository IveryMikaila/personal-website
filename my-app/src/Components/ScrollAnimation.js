import React from 'react'
import About from './Page Sections/About'
import Brands from './Page Sections/Brands'

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
    </div>
  )
}

export default ScrollAnimation;