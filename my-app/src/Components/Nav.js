import React,{useState} from 'react'
import styled from 'styled-components';
import '../Styles/Nav.css'

const IconContainer = styled.label`
border-radius:50px;
cursor:pointer;
text-align:center;
z-index:7;
display: flex;
align-items: center;
justify-content: center;
`;

const NavContainer = styled.div`
transform: ${props => props.clicked? "scale(1)": "scale(0)"} 
`
const Icon = styled.span`
background-color: ${(props) => (props.clicked ? "transparent" : "#F62680")};

&::before {
  top: ${(props) => (props.clicked ? "0" : "-0.8rem")};
  transform: ${(props) => (props.clicked ? "rotate(135deg)" : "rotate(0)")};
}

&::after {
  top: ${(props) => (props.clicked ? "0" : "0.8rem")};

  transform: ${(props) => (props.clicked ? "rotate(-135deg)" : "rotate(0)")};
}

${IconContainer}:hover &::before {
  top: ${(props) => (props.clicked ? "0" : "-1rem")};
}
${IconContainer}:hover &::after {
  top: ${(props) => (props.clicked ? "0" : "1rem")};
}
`

const Nav = () => {
const [click, setClick] = useState(false);
const handleClick = () => setClick(!click);

  return (
    <>
      <IconContainer className='nav-icon-container' htmlFor='navi-toggle'onClick={handleClick} >
        <Icon className='nav-icon' clicked={click} >&nbsp;</Icon>
        </IconContainer>  
<NavContainer className='nav-container' clicked={click}>
    <nav className='nav-menu'>
<a className='nav-link' href='#about'>ABOUT</a>
<a className='nav-link' href='#clients'>CLIENTS</a>
<a className='nav-link' href='#testimonials'>REVIEWS</a>
<a className='nav-link' href='#projects'>PROJECTS</a>
<a className='nav-link' href='#contact'>CONTACT</a>
    </nav>
</NavContainer>

    </>
  )
}

export default Nav;