import '../Styles/Home.css'
import Navigation from './Navigation';
import ScrollAnimation from './ScrollAnimation'
import resume from '../assets/MIvery_Resume.pdf'


const Home = () => {
  return (
    <>
<div className='home-container'>

  {/* ---------Section 1---------- */}
<div className='home-section'>
    {/* Menu */}
   <Navigation />
{/* Home Intro Section */}
  <div className='home-intro'>
<h1 className='home-title'>Hello. I'm a freelance frontend developer</h1>
<p>My name is Mikaila Ivery. I code webpages using modern frontend web technologies and my peculiar mind.</p>
<a className='home-button' href='#contact'>Let's work together!</a>
  </div>
  {/* Home Footer */}
  <div className='home-footer'>
    Check me out on <a href='https://www.linkedin.com/in/mikaila-ivery-259218223/' target='_blank'>Linkedin</a>, <a href='https://www.shecodes.io/graduates/28712-mikaila-ivery' target='_blank'>SheCodes</a>, and <a href='https://github.com/IveryMikaila' target='_blank'>GitHub.</a>
    <p>Download <a href={resume} download="Resume">my resume </a>(PDF 85kb).</p>
  </div>
</div>

  {/* ---------Section 2---------- */}
<ScrollAnimation />
</div>
    </>
  )
}

export default Home;