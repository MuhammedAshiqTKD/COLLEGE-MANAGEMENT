import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import "./studentview.css"
const studentview = () => {
    const [getStudent,setStudent]=useState([])
    const getAllstudent=async()=>{
      const res=await axios.get("http://localhost:3041/college/getfullstudent")
      setStudent(res.data)
      console.log(getStudent);
      
      
    }
    // useEffect(()=>{
    //     getAllstudent() 
    // } ,[])

    useEffect(()=>{
        getAllstudent() 
    },[])
    const deleteStudent = async (id) => {
      try {
        const confirmed = window.confirm("Are you sure you want to delete this student?");
    
        if (confirmed) {
          const res = await axios.delete(`http://localhost:3041/college/deletestudent/${id}`);
          console.log("deleted", res.data);
          getAllstudent();
        } 
      } catch (error) {
        console.log(error);
      }
    };


  return (
    <div>
      
      <div className="allstafflist-heading">
        <h2>All Student</h2>
      </div>
      <div className="list-of-staffs container">
        <div className="row">
          
              {
                 getStudent.map((data,index)=>
                 <div className="col-lg-3" key={index} >
                   <Link className='card-link' to={`/studentdetails/${data._id}`}>
                   
                    <div className="staff-card" >
                    <div className="staff-dp"><img src={data.photo} alt="" /></div>
                    <h3 className='card-heading'>{data.name}</h3>
                    <p className='card-para'>{data.email}</p>
                    {/* <p className='card-para'>{data.empid}</p> */}
                    <div className="allstaff-delete-view-btns">
                        {/* <Link className='allstaff-view-btn'>View</Link> */}
                        <Link className='allstaff-delete-btn' to={`#${data._id}`} onClick={() => deleteStudent(data._id)}>Delete</Link>
                    </div>
                </div>
                </Link>
                </div>
                  )
              }
           

        </div>
      </div>


    </div>
  )
}

export default studentview
