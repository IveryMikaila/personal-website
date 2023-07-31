import React, {useState} from 'react'
import { Squash as Hamburger } from 'hamburger-react'
import '../Styles/Nav.css'

const Navigation = () => {
    const [isOpen, setOpen] = useState(false)

const NavClosed =""    
const NavOpen = ()=>{
    return(<>
       <nav className={isOpen ? "nav-menu active" : "nav-menu"}>
<a className='nav-link' href='#about'>ABOUT</a>
<a className='nav-link' href='#clients'>CLIENTS</a>
<a className='nav-link' href='#testimonials'>REVIEWS</a>
<a className='nav-link' href='#projects'>PROJECTS</a>
<a className='nav-link' href='#contact'>CONTACT</a>
    </nav>
    </>)
}



  return (
    <div className='nav-container'>
     <Hamburger color="#F62680" toggled={isOpen} toggle={setOpen} />   
     {isOpen ? NavOpen() : NavClosed}
    </div>
  )
}

export default Navigation;