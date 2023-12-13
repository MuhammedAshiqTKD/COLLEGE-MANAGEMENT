import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
const Navbar = () => {
  return (
    <div>

      <header className="site-navbar" role="banner">
        <div className="container  ">
          <div className="row align-items-center ">
          
         
              <nav className="site-navigation " role="navigation" id='navmain'>
                <ul className="site-menu ">
                  <li className="active"><a href="index.html"><Link className='homelink' to="/">Home</Link></a></li>
                 
                  <li><a href=""><span>Listings</span></a></li>
                  <li><a href=""><span>About</span></a></li>
                  <li><a href=""><span>Blog</span></a></li>
                  <li><a href=""><span>Contact</span></a></li>
                </ul>
              </nav>


          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
