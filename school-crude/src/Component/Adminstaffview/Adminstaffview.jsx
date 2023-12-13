import React, { useEffect, useState } from 'react';
import './Adminstaffview.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Adminstaffview = () => {
  const [count, setCount] = useState(0);
  const [getEmp, setEmp] = useState([]);

  const getEmployee = async () => {
    try {
      const res = await axios.get("http://localhost:3002/api/getstaff");
      setEmp(res.data);
    } catch (error) {
      console.error('Error fetching employee data:', error);
    }
  };

  const deleteStaff = async (id) => {
    const isConfirmed = window.confirm("Are you sure you want to delete this employee?");

    if (isConfirmed) {
      try {
        const res = await axios.delete(`http://localhost:3002/api/delstaffdata/${id}`);
        console.log('Employee deleted:', res.data);
      } catch (error) {
        console.error('Error deleting employee:', error);
      }
    } else {
      console.log('Deletion cancelled.');
    }
    setCount(count + 1);
  };

  useEffect(() => {
    getEmployee();
  }, [count]);

  return (
    <div>
      <div className='admin-staff-view-color'>
        <h1 className='staff-view-head'>Staff View</h1>
        <div className="row admin-staff-view-card">
          {getEmp.map((data, index) => (
            <div key={index} className="col-lg-3 admin-staff-view-card-1">
              <div className="admin-staff-view-img">
                <img src={data.photo} alt="" />
              </div>
              <h2>{data.name}</h2>
              <h4>{data.empid}</h4>
              <div className="admin-staff-view-delete-btn">
                <Link className='admin-staff-view-btn-link' to={`/adminstaffallview/${data._id}`}>
                  <button className='admin-staff-view-btn'>View</button>
                </Link>
                <Link className='admin-staff-delete-btn-link' to={`#${data._id}`}>
                  <button onClick={() => deleteStaff(data._id)} className='admin-staff-delete-btn'>Delete</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Adminstaffview;
