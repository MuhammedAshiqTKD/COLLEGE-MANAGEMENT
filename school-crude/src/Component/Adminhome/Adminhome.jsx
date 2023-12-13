import React from 'react';
import "./Adminhome.css";
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
const Adminhome = () => {
  const location = useLocation();
  const username = location.state && location.state.username;

  return (
    <div>
      <nav className="navbar admin-home-bg">
        <div className="container-fluid">
          <div className='admin-home-fafa'></div>
          <div className='admin-home-user'>{username}</div>
        </div>
      </nav>




      <div className="card1">
        
                <div className="btn-staff-reg1">
                    <Link to='/staffregadmin'><button  className="btn-staff-reg" role="button">STAFF REGISTRATION</button></Link>
                </div>
                <div className="staffbtn">
                    <Link to="/adminstaffreg"><button className="btn-student-view" role="button">STAFF VIEW</button></Link>
                </div>
                <div className="studentbtn">
                    <button className="btn-staff-view" role="button">STUDENT VIEW</button>
                </div>

            </div>
    

    </div>
  );
}

export default Adminhome;
