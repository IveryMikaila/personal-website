import React from 'react'
import '../../Styles/Other.css'

const Brands = () => {
  return (
   <>
   <div className='brand-wrappers'>
    {/* Brand 1 */}
   <div className='brand-card oree'>
      <h1 className='brand-oree'>Orée Nyc</h1>
      <div className='brand-content'>
      Lorem ipsum dolor sit amet. Non voluptates placeat ab sunt soluta ab fugiat culpa vel autem corrupti 
      </div>
    </div>
       {/* Brand 2 */}
   <div className='brand-card bb'>
      <h1 className='brand-bb'>Boy Blondey</h1>
      <div className='brand-content'>
      Lorem ipsum dolor sit amet. Non voluptates placeat ab sunt soluta ab fugiat culpa vel autem corrupti 
      </div>
    </div>
       {/* Brand 3 */}
   <div className='brand-card hair'>
      <h1 className='brand-hair'>Brooklyn House<br/>of Hair</h1>
      <div className='brand-content'>
      Lorem ipsum dolor sit amet. Non voluptates placeat ab sunt soluta ab fugiat culpa vel autem corrupti 
      </div>
    </div>
       {/* Brand 4 */}
   <div className='brand-card moojy'>
   <h1 className='brand-moojy'>Waist Away <span className='moojy-font2'>by Moojy</span></h1>
      <div className='brand-content'>
      Lorem ipsum dolor sit amet. Non voluptates placeat ab sunt soluta ab fugiat culpa vel autem corrupti 
      </div>
    </div>

   </div>
   </>
  )
}

export default Brands;