import React from 'react'
import "./Home.css"
import {Link} from 'react-router-dom'
const Home = () => {
    return (
        <div>

            <div className="card">
                <div className="adminbtn">
                    <Link to='/adminlogin'><button  className="btnadmin" role="button">ADMIN</button></Link>
                </div>
                <div className="staffbtn">
                    <button className="btnstaff" role="button">STAFF</button>
                </div>
                <div className="studentbtn">
                    <button className="btnstudent" role="button">STUDENT</button>
                </div>
                
            </div>

        </div>
    )
}

export default Home
