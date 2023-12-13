import React , { useState ,useEffect }from 'react'
import "./Editstaffdetails.css"
import axios from 'axios';
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'





const Editstaffdetails = () => {
 
    let photo=""
    let navigate=useNavigate()
   const {id}=useParams()
    const[val,setVal]=useState({
      name:"",
      email:'',
      phone:'',
      address:'',
      empid:'',
      salary:'',
      designation:'',
      experience:'',
      username:"",
      password:"",
      confirmpassword:"",
      admin:"",
      photo: "",
    })
   
    console.log(id);
  
    const getData=async()=>{
      const res = await axios.post(`http://localhost:3002/api/getstaffdetails/${id}`);
  
      if(res.status==200)
      {
        setVal(res.data)
      }
    }
  
    useEffect(()=>{
      getData()
    },[])
    console.log('val',val);
  
  
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
    
    const getDatas=(e)=>{ 
      setVal((pre)=>({...pre,[e.target.name]:e.target.value}))
    }
    
    const Upload=async(e)=>{
      e.preventDefault()
    
      photo=await convertToBase64(e.target.files[0])
      setVal((pre)=>({...pre,photo:photo}))
    }
    
    const editData=async(e)=>{
      e.preventDefault()
      console.log(val)
      
      const res=await axios.patch(`http://localhost:3002/api/editstaffdetails/${id}`,{...val})
      if(res.status!=200){
        console.log(res.status);
        alert("Data Not Edited")
      }else{
        alert('Data Edited')
        navigate(`/adminstaffallview/${id}`)
      }
    }










  return (
    <div>
       <div className="main-container">
        <div className="mainhead">
            <div className="title">Staff Edit Page</div>
           
        </div>
        
        <div className="content">
          <form action="#">
            <div className="user-details">
              <div className="input-box">
               
                <input type="text" placeholder="Enter your name"  name='name' value={val.name}   onChange={getDatas} required/>
              </div>
              <div className="input-box">
               
                <input type="text" placeholder="Enter your EmpId" name='empid' value={val.empid}  onChange={getDatas} required/>
              </div>
              <div className="input-box">
               
                <input type="text" placeholder="Enter your User Name" name='username' value={val.username}   onChange={getDatas} required/>
              </div>
              <div className="input-box">
             
                <input type="text" placeholder="Enter your Password" name='password' value={val.password}  onChange={getDatas} required/>
              </div>
              <div className="input-box">
                
                <input type="text" placeholder="Enter your cinfirm Password" name='confirmpassword' value={val.confirmpassword}  onChange={getDatas} required/>
              </div>
              <div className="input-box">
               
                <input type="text" placeholder="Confirm your phone" name='phone' value={val.phone}  onChange={getDatas} required/>
              </div>
              <div className="input-box">
              
                <input type="text" placeholder="Confirm your email" name='email' value={val.email}  onChange={getDatas} required/>
              </div>
              <div className="input-box">
               
                <input type="text" placeholder="Confirm your address" name='address' value={val.address}  onChange={getDatas} required/>
              </div>
              <div className="input-box">
           
                <input type="text" placeholder="Confirm your designation" name='designation' value={val.designation}  onChange={getDatas} required/>
              </div>
              <div className="input-box">
              
                <input type="text" placeholder="Confirm your exp" name='experience' value={val.exp}  onChange={getDatas} required/>
              </div>
              <div className="input-box">
       
                <input type="text" placeholder="Confirm your salary"  name='salary' value={val.salary}  onChange={getDatas} required/>
              </div>
              <div className="input-box">
               
                <input type="text" placeholder="Confirm your added by" name='admin' value={val.admin}  onChange={getDatas} required/>
              </div>
            </div>
            <div className="photofield">
                <img src={val.photo} alt="" />
              <input type="file" placeholder=" photo" name='photo'   onChange={Upload} required/>
            </div>
          
            <div className="button">
              <input type="submit" value="Register"  onClick={editData} />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Editstaffdetails