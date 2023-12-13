import React, { useEffect, useState } from 'react'
import './Staffdetails.css'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'

const Staffdetails = () => {
    const {id}=useParams()
// console.log(id);
const [getStaff,setStaff]=useState([])
const fullData=async()=>{
    try {
        const res=await axios.post(`http://localhost:3041/college/getDetails/${id}`)
        setStaff(res.data)
        console.log(getStaff);
    } catch (error) {
        console.log(error);
    }
}

useEffect(() => {
    fullData(id);
  }, [id]);   

  return (
    <div>
      <div className="staffdetails-main-card">
        <div className="staffdetails-main-card-left">
            <div className="staffdp"><img src={getStaff.photo} alt="" /></div>
            <h3 className='staffdetails-name'>{getStaff.name}</h3>
            <p className='staffdetails-email'><i className="fa fa-envelope" aria-hidden="true"></i>{getStaff.email}</p>
            <Link className='staffdetails-edit-btn' to={`/staffedit/${id}`}>Edit</Link>
        </div>
        <div className="staffdetails-main-card-right">
          <table>
            <tr>
                <th className='staffdetails-th'>Added by</th>
                <td className='staffdetails-td'>: {getStaff.admin}</td>
            </tr>
            <tr>
                <th className='staffdetails-th'>Emp Id</th>
                <td className='staffdetails-td'>: {getStaff.empid}</td>
            </tr>
            <tr>
                <th className='staffdetails-th'>Phone</th>
                <td className='staffdetails-td'>: {getStaff.phone}</td>
            </tr>
            <tr>
                <th className='staffdetails-th'>Designation</th>
                <td className='staffdetails-td'>: {getStaff.designation}</td>
            </tr>
            <tr>
                <th className='staffdetails-th'>Salary</th>
                <td className='staffdetails-td'>: {getStaff.salary}</td>
            </tr>
            <tr>
                <th className='staffdetails-th'>Experience</th>
                <td className='staffdetails-td'>: {getStaff.expirience}</td>
            </tr>
            <tr>
                <th className='staffdetails-th'>Address</th>
                <td className='staffdetails-td'>: {getStaff.address}</td>
            </tr>
            <tr>
                <th className='staffdetails-th'>Address</th>
                <td className='staffdetails-td'>: {getStaff.address}</td>
            </tr>
            <tr>
                <th className='staffdetails-th'>Address</th>
                <td className='staffdetails-td'>: {getStaff.address}</td>
            </tr>
            <tr>
                <th className='staffdetails-th'>Address</th>
                <td className='staffdetails-td'>: {getStaff.address}</td>
            </tr>
            
          </table>
        </div>
      </div>
    </div>
  )
}

export default Staffdetails
