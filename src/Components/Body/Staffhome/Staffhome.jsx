import React from 'react'
import "./staffhome.css"
// import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom'
import './staffhome.css'

const Staffhome = () => {
  // const location=useLocation()
  // const username = location.state && location.state.username;
  return (
    <div>
     <div className="home-actype-main-card-staff">
          <h3>Account Type</h3>
          <div className='home-btns-staff'><Link className="home-admin-btn-staff1" to='/studentregistration'>STUDENT REGISTRATION</Link></div>
          <div className='home-btns-staff'><Link className="home-staff-btn-staff" to='/studentview'>STUDENT VIEW</Link></div>

        </div>
    </div>
  )
}

export default Staffhome
