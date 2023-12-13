import React from 'react';
import './Adminlogin.css'
import { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
const AdminLogin = () => {
  const navigate = useNavigate()
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


  const handleLogin = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post(`http://localhost:3002/api/login`, {

        username: username,
        password: password
      });

      const data = response.data;
      console.log(data);

      if (response.status !== 404) {
        const token = data.token;
        localStorage.setItem("token", JSON.stringify(token));
        navigate("/adminhome", { state: { username } });
        alert("Login SuccessFully");
      } else {
        alert(data.msg);
      }
    } catch (error) {
      alert("Server not connected");
    }
  };
  return (
    <div>
      <div className="login-container11main">
        <h2>Admin Login</h2>
        <form className="login-form" action="#" method="post">
          <div className="form-groupuser">
            <label htmlFor="username">Username:</label><br></br>
            <input type="text" id="username" name="username" value={username} onChange={(e) => setUsername(e.target.value)} required />
          </div>
          <div className="form-group1">
            <label htmlFor="password">Password:</label><br></br>
            <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} name="password" required />
          </div>
          <button type="submit" className="submit-btn" onClick={handleLogin}>
            Submit
          </button>

          <div className="reg">
            <Link to="/adminreg" className='signupadmin'>Sign up</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
