import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'


const Home = () => {
  return (
    <div>
    <div className="home-main">
      
       
      </div>
      <div className="home-main-right">
        <div className="home-actype-main-card">
          <h3>Account Type</h3>
          <div className='home-btns'><Link className="home-admin-btn" to='/adminlogin'>Admin</Link></div>
          <div className='home-btns'><Link className="home-staff-btn" to='/stafflogin'>Staff</Link></div>
          <div><Link className="home-student-btn" to='/studentreg'>Student</Link></div>
        </div>
      </div>
    </div>
   
  )
}

export default Home