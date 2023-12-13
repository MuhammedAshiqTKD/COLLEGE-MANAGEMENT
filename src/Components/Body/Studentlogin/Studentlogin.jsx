import React, { useState } from 'react'
import './Studentlogin.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
// import { Link } from 'react-router-dom'
const Studentlogin = () => {
  const navigate=useNavigate()
  const [studentid,setstudentid]=useState('') 
  const [dob,setdob]=useState('')
  
  
  
  
  const Login=async(e)=>{
    e.preventDefault()
    try {
      const res=await axios.post("http://localhost:3041/college/studentlogin",{
        studentid:studentid,
        dob:dob
      })
      const data=res.data;
      console.log(data);
      if(res.status!==404){
        const token=data.token
        localStorage.setItem("token",JSON.stringify(token))
        localStorage.setItem("studentid", JSON.stringify(studentid));
        navigate("/",{state:{studentid}})
      }
    } catch (error) {
      alert("cant't Login",error)
    }
  }
  return (
    <div>
       <div className="studentlogin-main">
        <div className="studentlogin-card">
            <div className="student-login-card-heading"><h4>Student Login</h4></div>
          <form action="" className='student-login-form'> 
            <div><input type="text"  onChange={(e)=>setstudentid(e.target.value)} placeholder='EmpId' /></div>
            <div><input type="text"  onChange={(e)=>setdob(e.target.value)}  placeholder='Dob'/></div>
            <button onClick={Login}>Login</button>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Studentlogin
