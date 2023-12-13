import React from 'react'
import './Staff_reg_admin.css'
import { useState } from 'react'

import axios from 'axios'
const reg_staff_admin = () => {

let Photo=""


  const [val,setval]=useState({

    empid: "",
        username:"",
        name:"",
        password: "",
        passwordchecked: "",
        email: "",
        phone: "",
        designation:"",
        salary:"",
        exp: "",
        address: "",
        photo: ""
  })

const getDatastaff=(e)=>{
    e.preventDefault();
    setval((pre)=>({...pre,[e.target.name]:e.target.value}))

  }

  function convertToBase64(file) {
    return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);
  
        fileReader.onload = () => {
            resolve(fileReader.result)
        }
        fileReader.onerror = (error) => {
            reject(error)
        }
    })
  }

  const Upload=async(e)=>{
    e.preventDefault()
  
    Photo=await convertToBase64(e.target.files[0])
    console.log(Photo);
  }










  const RegisterDatastaff=async(e)=>{
    e.preventDefault();
    console.log(val);
try {
  const res=await axios.post("http://localhost:3002/api/addstaff",{...val,photo:Photo})
  console.log(res.status);
  if(res.status!=201){

   alert("Data Not Added")
  }
  else{
    
    alert(" Data Added ")
  }
} catch (error) {
  alert("Data Not Added",error)
}

   
  }

  








  return (
    <div>
      <div className="login-main">
        <h2>Staff Registration</h2>
        <form className="login-form-staff" action="#" method="post" >

          <div className="form-group12-staff">
            <label htmlFor="username" id='emplabel'>EmpID</label>
            <input type="text" id="empid" name="empid" required  onChange={getDatastaff}/>
            <label htmlFor="username" id='usernameid'>Username:</label>
            <input type="text" id="username" name="username" required  onChange={getDatastaff}/>
            <label htmlFor="name" id='nameid'>Name:</label>
            <input type="text" id="name" name="name" required onChange={getDatastaff} />
          </div>

          <div className="form-group12-staff">

            <label htmlFor="password">Password:</label><br></br>
            <input type="password" id="password" name="password" required onChange={getDatastaff} />
            <label htmlFor="password" id='check'>CheckPswd:</label><br></br>
            <input type="password" id="checkpassword" name="passwordchecked" required  onChange={getDatastaff}/>
            <label htmlFor="email" id='emaillabel'>Email:</label>
            <input type="text" id="email" name="email" required onChange={getDatastaff} />
          </div>
          <div className="form-group12-staff">
            <label htmlFor="phone">Phone:</label><br></br>
            <input type="phone" id="phone" name="phone" required onChange={getDatastaff} />
            <label htmlFor="designation" id='desi'>Designation:</label>
            <input type="text" id="designation" name="designation" required onChange={getDatastaff} />
            <label htmlFor="salary">Salary:</label><br></br>
            <input type="text" id="salary" name="salary" required onChange={getDatastaff} />


          </div>


          <div className="form-group12-staff">
            <label htmlFor="exo">Exp:</label>
            <input type="text" id="exp" name="exp" required onChange={getDatastaff} />
            <label htmlFor="address" id='idadd'>Address:</label>
            <input type="text" id="address" name="address" required onChange={getDatastaff} />
            <label htmlFor="photo">Photo:</label><br></br>
            <input type="file" id="photo" name="photo" required onChange={Upload} />  

          </div>
      
          <button type="submit" className="submit-btn-staff" onClick={RegisterDatastaff} >
            Submit
          </button>


        </form>
      </div>
    </div>
  )
}

export default reg_staff_admin