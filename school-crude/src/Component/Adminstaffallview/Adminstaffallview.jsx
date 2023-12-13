import React, { useEffect, useState } from 'react'
import './Adminstaffallview.css'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';


const Adminstaffallview = () => {

    const { id } = useParams()
    console.log(id);
    const [getEmp, setEmp] = useState([])
    const fullView = async (id) => {
        try {
            const res = await axios.post(`http://localhost:3002/api/getstaffdetails/${id}`);
            console.log(res);
            setEmp(res.data);
            console.log(res.data);
        } catch (error) {
            console.error('Error fetching employee details:', error);
        }
    };
    useEffect(() => {
        fullView(id);
    }, [id]);
    console.log(getEmp);

    return (
        <div className='staff-full-view-color'>
            <div className="staff-full-view-head">
                <h2>STAFF FULL DETAILS</h2>
            </div>
            <div className="staff-full-view-card">
                <div className="staff-full-view-img">
                    <div className="staff-full-view-img-only">
                        <img src={getEmp.photo} alt="" />
                    </div>
                    <div className="staff-full-view-head-id">
                        <h1>{getEmp.name}</h1>
                        <h2>{getEmp.empid}</h2>
                        <Link to={`/adminstaffedit/${getEmp._id}`}><button className='staff-full-view-edit-data'>Edit</button></Link>
                    </div>
                </div>
                <div className="staff-full-view-details">

                    <table>
                        <tbody>
                            <tr>
                                <td className='datas'>Username:</td>
                                <td className='datasin'>{getEmp.username}</td>
                            </tr>
                            <tr>
                                <td className='datas'>Phone:</td>
                                <td className='datasin'>{getEmp.phone}</td>
                            </tr>
                            <tr>
                                <td className='datas'>Experience:</td>
                                <td className='datasin'>{getEmp.exp}</td>
                            </tr>
                            <tr>
                                <td className='datas'>Designation:</td>
                                <td className='datasin'>{getEmp.designation}</td>
                            </tr>
                            <tr>
                                <td className='datas'>Address:</td>
                                <td className='datasin'>{getEmp.address}</td>
                            </tr>
                            <tr>
                                <td className='datas'>Email:</td>
                                <td className='datasin'>{getEmp.email}</td>
                            </tr>
                            <tr>
                                <td className='datas'>Salary:</td>
                                <td className='datasin'>{getEmp.salary}</td>
                            </tr>
                            <tr>
                                <td className='datas'>Admin:</td>
                                <td className='datasin' >{getEmp.admin}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Adminstaffallview