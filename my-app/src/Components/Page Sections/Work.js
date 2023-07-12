import React from 'react'
import '../../Styles/Final.css'
import Slider from '../Slider'
import Contact from './Contact'

const Work = () => {


  return (
    <>
    <div className='work-container'>
      <a id='projects'></a>
  <h1 className='work-title'>
    Projects
  </h1>
  <p className='work-caption'>Scroll slowly to view a small selection of projects I've contributed to recently.</p>
  <Slider />
    </div>
    <Contact />
    </>
  )
}

export default Work;