import React from 'react'
import '../../Styles/About.css'

const About = () => {
  return (
    <div id='about' className='about-container'>
    <h1 className='about-main-heading'>About me</h1>
    <h2 className='about-second-heading'>My passion involves collaborating with teams in agile environments to faithfully translate wireframes into websites that satisfy my client's needs. I also enjoy studying the latest frontend technologies in order to sharpen my skills and bring innovation to any webpage I code.</h2>
    <div className='about-content-wrapper'>
      <h3 className='about-content-title'>Technical</h3>
      <p className='about-content-p'>My strongest qualifications include my proficiency in HTML5, CSS3, Javascript, and React.js. I'm currently pursuing my Bachelor of Science in Information Technology at the University of Massachusetts Global.</p>
      <h3 className='about-content-title'>Personal</h3>
      <p className='about-content-p'>I was born and raised in Brooklyn, New York, and am a first-generation college student in my family. I was diagnosed with a neurodivergent disorder that significantly impacted my daily life, but I overcome it through the power of God and one git commit at a time!</p>
    </div>
    <p className='about-footnote'>That's all for now folks!</p>
    </div>
  )
}

export default About;