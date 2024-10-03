import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo/logoMain.png';

const Navbar = () => {
  return (
    <header>
        <nav>
            <div className=''>
                <img 
                 src={logo}
                    alt="ReviewTracker Logo"
                    className="h-10 w-auto transition-transform duration-300 hover:scale-110"
                />
            </div>
          <ul>
            <li>
              <Link to="/">Navbar</Link>
            </li>
          </ul>
        </nav>
      </header>
  )
}

export default Navbar
