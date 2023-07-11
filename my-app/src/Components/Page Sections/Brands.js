import React from 'react'
import '../../Styles/Brands.css'

const Brands = () => {
  return (
   <>
   <div className='brand-wrapper'>
    <a id='clients'></a>
    {/* Brand 1 */}
   <div className='brand-card oree'>
      <h1 className='brand-oree'>Orée Nyc</h1>
      <div className='brand-content'>
        <h3>Orée Nyc</h3>
Hired to design and code mock designs and wireframes for landing pages. Technologies used include Figma, HTML5, CSS3, Bootstrap, and JavaScript.
</div>
    </div>
       {/* Brand 2 */}
   <div className='brand-card bb'>
      <h1 className='brand-bb'>Boy Blondey</h1>
      <div className='brand-content'>
      <h3>Boy Blondey</h3>
      Hired to customize/code Shopify liquid theme template and code HTML Emails. Technologies used include HTML5, CSS3, JavaScript, and React.js.</div>
    </div>
     {/* Brand 3 */}
   <div className='brand-card hair'>
      <h1 className='brand-hair'>Brooklyn House<br/>of Hair</h1>
      <div className='brand-content'>
      <h3>Brooklyn House of Hair</h3>
      Hired to customize/code Shopify liquid theme template and design hero section. Technologies used include Figma, HTML5, CSS3, and JavaScript.
      </div>
    </div>
       {/* Brand 4 */}
   <div className='brand-card moojy'>
   <h1 className='brand-moojy'>Waist Away <span className='moojy-font2'>by Moojy</span></h1>
      <div className='brand-content'>
      <h3>Waist Away by Moojy</h3>
      Hired to customize/code Shopify liquid theme template and design hero section. Technologies used include Figma, HTML5, CSS3, and JavaScript.
      </div>
    </div>

   </div>
   </>
  )
}

export default Brands;