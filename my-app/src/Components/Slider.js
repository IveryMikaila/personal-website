import React from 'react'
import { Link } from "react-router-dom";


const Slider = () => {
  return (
    <div className='project-slider'>



<Link to={'https://boyblondey.com/'} target='_blank' className='project-slide slide1'>
    <div className='project-wrapper'>
    <h3 className='project-name'>Boy Blondey</h3>
<p className='project-description'>Customized Shopify theme template that aligns with basic web development standards and SEO requirements</p>
    </div>  
</Link>



<Link to={'https://www.oreenyc.com/'} target='_blank' className='project-slide slide2'>
    <div className='project-wrapper'>
    <h3 className='project-name'>Orée Nyc</h3>
<p className='project-description'>Innovative web design/code for product launches and landing pages.</p>
    </div>  
</Link>




<Link to={'https://brooklynhouseofhairllc.com/'} target='_blank' className='project-slide slide3'>
    <div className='project-wrapper'>
    <h3 className='project-name'>Brooklyn House of Hair</h3>
<p className='project-description'>Customized web design/code for hero section and Shopify theme template.</p>
    </div>  
</Link>




<Link to={'https://cb9d00.myshopify.com/'} target='_blank' className='project-slide slide4'>
    <div className='project-wrapper'>
    <h3 className='project-name'>Waist Away by Moojy</h3>
<p className='project-description'>Customized Shopify theme template that aligned with basic web development standards and SEO requirements</p>
    </div>  
</Link>

    </div>
  )
}

export default Slider;