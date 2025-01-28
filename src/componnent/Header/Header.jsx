import React, {useState} from 'react'
// import { Link } from 'react-router-dom'
import './Header.css';
const Header = () => {
     const [isMobile, setIsMobile] = useState(false)
  return (

    <div className='navbar'>
        <div className='nav__container'>
            <h3 className='logo'>favour</h3>
            <ul className='nav-links'>
                    <li className="home">Home</li>
                    <li className="About">About</li>
                    <li className="Skill">Skill</li>
                    <li className="Contact">Project</li>
                    <li className="SignUp">Resume</li>
                </ul>
        </div>
    </div>
  )
}

export default Header
