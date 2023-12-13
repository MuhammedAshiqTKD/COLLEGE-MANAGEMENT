import React, { useState } from 'react'
import './StaffForgotPwd.css'
import { Link } from 'react-router-dom'
import axios from 'axios'

const StaffForgotPwd = () => {
  const [val, setVal] = useState({ phone: "", email: "", password: "" })
  const handlechange = (e) => {
    setVal((pre) => ({ ...pre, [e.target.name]: e.target.value }))
    console.log(val);
  }

  const editPwd = async (e) => {
    e.preventDefault()
    const res = await axios.get(`http://localhost:3041/college/getusername/${val.phone}`)
    let data = res.data;
    if (data.email === val.email) {
      const res = await axios.patch(`http://localhost:3041/college/forgotepwd/${val.phone}`, {
        password: val.password
      })
      console.log(res.data);
    }
  }

  return (
    <div>
      <div className="staff-forgot-card">
        <h5>Forgot Your Password</h5>
        <div className="staff-forgot-form">
          <form action="" onSubmit={editPwd}>
            <div>
              <input type="text" placeholder='Registered Phone number' name='phone' onChange={handlechange} />
            </div>
            <div>
              <input type="text" placeholder='Registered Email' name='email' onChange={handlechange} />
            </div>
            <div>
              <input type="password" placeholder='New password' name='password' onChange={handlechange} />
            </div>
            <button>Change Password</button>
            <p></p>
            <div>
              <Link className='stf-frgt-usr' to='/stafflogin'>Back</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default StaffForgotPwd