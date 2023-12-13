import React, { useEffect, useState } from 'react'
import "./Studentalldetail.css"
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

const StudentDetails = () => {
     const navigate = useNavigate()
     const { id } = useParams();
     const [getStudent, setStudent] = useState([]);
     const [attentantace, setAttentantace] = useState();

     const fullData = async () => {
          try {
               const res = await axios.post(`http://localhost:3041/college/getStudentdetails/${id}`);
               setStudent(res.data);
               console.log(res.data);
               getpersantage();
          } catch (error) {
               console.log(error);
          }
     }

     useEffect(() => {
          fullData(id);
     }, [id]);

     const getpersantage = () => {
          if (getStudent.attandance !== "" && getStudent.attandance !== undefined) {
               let pers = (getStudent.attandance / 200) * 100;
               setAttentantace(pers);
               console.log(pers);
          }
     };

     const [username, setUsername] = useState("");

     useEffect(() => {
          const storedUsername = localStorage.getItem("username");
          if (storedUsername) {
               setUsername(JSON.parse(storedUsername));
          }
     }, []);

     const Logout = () => {
          const confirmed = window.confirm("Are you sure you want to log out?");
          if (confirmed) {
               localStorage.clear();
               navigate("/admin")
          }

     };

     //     const internalChe=getStudent.internal.internalChe
     //     const internalPhy=getStudent.internal.internalPhy
     //     const internalMath=getStudent.internal.internalMath

     //     const testPhy=getStudent.test.testPhy
     //     const testChe=getStudent.test.testChe
     //     const testMath=getStudent.test.testMath

     return (
          <div>
               <div className="upper">
                    <div className="upper-left"><div className=''><Link className='staffhome-back-btn' to='/staffhome'><i className="fa fa-angle-left" aria-hidden="true"></i>Back</Link></div></div>
                    <div className="upper-right">
                         <div className="mmm"><div className="admin-logoutt"><div className='span'><span><i className="fa fa-user" aria-hidden="true"></i>{username}</span></div><div><button className="Btn" onClick={Logout}>

                              <div className="sign"><svg viewBox="0 0 512 512"><path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path></svg></div>

                              <div className="text">Logout</div>
                         </button></div></div></div>
                    </div>
               </div>
               <div className="stud-details-main-card">
                    <div className="stud-details-main-card-left">
                         <div className="stud-dp"><img src={getStudent.photo} alt="" /></div>
                         <h2 className='stud-name'>{getStudent.name}</h2>
                         <p className='stud-id'>{getStudent.studentid}</p>
                         <div className="stud-edit">
                              <Link className='stud-edit-btn' to={`/studentedit/${getStudent._id}`}>Edit</Link>
                         </div>
                    </div>
                    <div className="stud-details-main-card-right">
                         <table>
                              <tr>
                                   <th className='stud-details-th'>Added By</th>
                                   <td className='stud-details-td'>: {getStudent.staff}</td>
                              </tr>
                              <tr>
                                   <th className='stud-details-th'>Date of birth</th>
                                   <td className='stud-details-td'>: {getStudent.dob}</td>
                              </tr>
                              <tr>
                                   <th className='stud-details-th'>Phone</th>
                                   <td className='stud-details-td'>: {getStudent.phone}</td>
                              </tr>
                              <tr>
                                   <th className='stud-details-th'>Email Address</th>
                                   <td className='stud-details-td'>: {getStudent.email}</td>
                              </tr>
                              <tr>
                                   <th className='stud-details-th'>Address</th>
                                   <td className='stud-details-td'>: {getStudent.address}</td>
                              </tr>
                              <tr>
                                   <th className='stud-details-th'>Course</th>
                                   <td className='stud-details-td'>: {getStudent.course}</td>
                              </tr>
                              <tr>
                                   <th className='stud-details-th'>Batch</th>
                                   <td className='stud-details-td'>: {getStudent.batch}</td>
                              </tr>
                              <tr>
                                   <th className='stud-details-th'>Semester</th>
                                   <td className='stud-details-td'>: {getStudent.sem}</td>
                              </tr>
                              <tr>
                                   <th className='stud-details-th'>Attendance</th>
                                   <td className='stud-details-td'>:  {attentantace !== "" ? `${attentantace}%` : 'Loading...'}</td>
                              </tr>
                              <tr>
                                   <th className='stud-details-th'>Internal Marks</th>
                                   <td className='stud-details-td'>: Che - {getStudent?.internal?.internalChe}</td>
                              </tr>

                              <tr>
                                   <td></td>
                                   <td className='stud-details-td'>: Phy - {getStudent?.internal?.internalPhy}</td>
                              </tr>
                              <tr>
                                   <td></td>
                                   <td className='stud-details-td'>: Math - {getStudent?.internal?.internalMath}</td>
                              </tr>
                              <tr>
                                   <th className='stud-details-th'>Test Marks</th>
                                   <td className='stud-details-td'>: Che - {getStudent?.test?.testChe}</td>
                              </tr>
                              <tr>
                                   <td></td>
                                   <td className='stud-details-td'>: Phy - {getStudent?.test?.testPhy}</td>
                              </tr>
                              <tr>
                                   <td></td>
                                   <td className='stud-details-td'>: Math - {getStudent?.test?.testMath}</td>
                              </tr>

                         </table>
                    </div>
               </div>
          </div>
     )
}

export default StudentDetails
