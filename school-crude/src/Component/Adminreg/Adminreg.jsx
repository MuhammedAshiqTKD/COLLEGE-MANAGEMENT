import React from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import './Adminreg.css'
import { useState } from 'react';
const Adminreg = () => {
const navigate=useNavigate()





    const [val,setval]=useState({
        name:"",
        username:"",
        password:""
    }  
    )
    const getData=(e)=>{
        e.preventDefault();
        setval((pre)=>({...pre,[e.target.name]:e.target.value}))
  
      }

      const RegisterData=async(e)=>{
        e.preventDefault();
        console.log(val);
    
    
        const res=await axios.post("http://localhost:3002/api/adduser",{...val})
        console.log(res.status);
        if(res.status!==201){
          alert("Data Note Added")
        }
        else{
          alert("Data Added SuccessFully")
          navigate("/adminlogin")
        }
      }

      










    return (
        <div>
          <div className="login-container11">
            <h2>Admin Registration</h2>
            <form className="login-form" action="#" method="post" >

            <div className="form-group12">
                <label htmlFor="username">name:</label><br></br>
                <input type="text" id="username1" name="name" required onChange={getData} />
              </div>

              <div className="form-groupreglogin">
                <label htmlFor="username">Username:</label><br></br>
                <input type="text" id="username" name="username" required onChange={getData} />
              </div>
              <div className="form-group1">
                <label htmlFor="password">Password:</label><br></br>
                <input type="password" id="password" name="password" required  onChange={getData}  />
              </div>
              <button type="submit" className="submit-btn" onClick={RegisterData}>
                Submit
              </button>
    
              <div className="reg">
                <Link to="/adminlogin" className='signupadmin'>Sign in</Link>
              </div>
            </form>
          </div>
        </div>
      );
    };
    
    

export default Adminreg
