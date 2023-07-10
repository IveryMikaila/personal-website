import React,{useState} from 'react'
import '../Styles/Sidebar.css'

const Sidebar = () => {
const [menu,setMenu] = useState(false);
const showMenu = () => setMenu(!menu);


  return (
    <div className='nav-container'>
      {/* Nav Button */}
       <svg className='nav-icon' onClick={showMenu} stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><g><path fill="none" d="M0 0h24v24H0z"></path><path d="M3 4h18v2H3V4zm0 7h12v2H3v-2zm0 7h18v2H3v-2z"></path></g></svg>

       {/* Navigation */}
      <nav className={menu ? 'nav-wrapper active' : 'nav-wrapper'}>
<ul className='nav-links'>
  <li>
    <a className='nav-link' href='#about'>About</a>
    <p>A little glimpse into who I am and my code journey.</p>
    </li>
  <li>
    <a className='nav-link' href='#clients'>Clients</a>
    <p>A list of some of the awesome teams I've worked with.</p>
    </li>
  <li>
    <a className='nav-link' href='#testimonials'>Testimonials</a>
    <p>Hear what my clients have to say about my work and conduct.</p>
    </li>
  <li
  ><a className='nav-link' href='#projects'>Projects</a>
      <p>View some of the projects I've done recently. </p>
  </li>
  <li>
    <a className='nav-link' href='#contact'>Contact</a>
    <p>Let's chat or grab a smoothie.</p>
    </li>
</ul>
      </nav>
    </div>
  )
}

export default Sidebar;