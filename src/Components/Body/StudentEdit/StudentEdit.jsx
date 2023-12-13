import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './StudentEdit.css'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const StudentEdit = () => {
    const {id}=useParams()
    let Photo="";
  const [val,setVal]=useState({
    staff:"",
    studentid:"",
    name:"",
    email:"",
    phone:"",
    address:"",
    dob:"",
    course:"",
    batch:"",
    sem:"",
    attandance:"",
    internal:{ 
      internalChe:"",
      internalPhy:"",
      internalMath:""
    },
   test:{
    testChe:"",
    testPhy:"",
    testMath:""
   },
    photo:""
  })
    const success = () =>
    toast.success("You Are Succesfuly Edited",{
     position: "top-right",
     autoClose:2500 ,
     hideProgressBar: false,
     closeOnClick: true,
     pauseOnHover: true, 
     draggable: true,
     progress: undefined, 
     theme:"dark",
   })
    const navigate=useNavigate()
    const [username, setUsername] = useState("");

    const fullData = async () => {
        try {
            const res = await axios.post(`http://localhost:3041/college/getStudentdetails/${id}`);
            setVal(res.data);
            console.log(val);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fullData(id);
    }, [id]);

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
    setVal((pre)=>({...pre,[e.target.name]:Photo}))
  }

  const Getdata=(e)=>{ 
    // console.log(e.target.value);
    setVal((pre)=>({...pre,[e.target.name]:e.target.value}))
    // console.log(val);
  }


  const GetTestmark = (e) => {
    setVal((pre) => ({...pre,test: { ...pre.test, [e.target.name]: e.target.value },}));
  };
  

  const GetInternalmark = (e) => {
    setVal((pre) => ({...pre,internal: { ...pre.internal, [e.target.name]: e.target.value },}));
  };

  const Edit=async(e)=>{
    e.preventDefault()
   try {
    const res=await axios.patch(`http://localhost:3041/college/editstudentdetails/${id}`,{...val,staff:username})
    console.log(res.data);
    if(res.status!==404){
      success();
      setTimeout(()=>{
        navigate("/staffhome");
},3000);
     }
   } catch (error) {
    alert("error",error)
   }
   
    
  }
  return (
    <div>
      <div className="upper">
      <div className="upper-left"><div className=''><Link className='staffhome-back-btn' to='/'><i className="fa fa-angle-left" aria-hidden="true"></i>Back</Link></div></div>
      <div className="upper-right">
      <div className="mmm"><div className="admin-logoutt"><div className='span'><span><i className="fa fa-user" aria-hidden="true"></i>{username}</span></div><div><button className="Btn" onClick={Logout}>
  
  <div className="sign"><svg viewBox="0 0 512 512"><path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path></svg></div>
  
  <div className="text">Logout</div>
</button></div></div></div>
      </div>
 </div>

<div className="studentreg-mainn">
        <div className="studentreg-card">
            <div className="student-reg-card-heading"><h4>Edit Student Details</h4></div>
          <form action="" className='student-reg-form'> 
          <div> 
            <input type="text" placeholder='Student ID' name='studentid' value={val.studentid} onChange={Getdata}/>
            <input type="text" placeholder='Full Name' name='name'  value={val.name} onChange={Getdata}/>
          </div>
              <div>
              <input type="text" placeholder='E mail'  name='email'  value={val.email} onChange={Getdata}/>
              <input type="text"  placeholder='Phone' name='phone'  value={val.phone} onChange={Getdata}/>
              </div>
              <div><input type="text" placeholder='Address' className='address'  value={val.address} name='address'onChange={Getdata} /></div>
            <div><input type="date" placeholder='Date Of Birth' name='dob'  value={val.dob} onChange={Getdata}/>
            <select name="course" id=""  value={val.studentid} onChange={Getdata}>
              <option value="Select Course">{val.course}</option>
              <option value="Computer Science">Computer Science</option>
              <option value="BA English">BA English</option>
              <option value="BBA">BBA</option>
              <option value="B Com">B Com</option>
              </select>
              </div>
            <div>
              <input type="text" placeholder='Batch' className='batch-sem-at'  value={val.batch} name='batch' onChange={Getdata}/>
              {/* <input type="text" placeholder='Semester' className='batch-sem-at'/> */}
              <select name="sem" id="" className='batch-sem-at'  value={val.sem} onChange={Getdata}>
              <option value="select sem">{val.sem}</option>
              <option value="Sem 1">Sem 1</option>
              <option value="Sem 2">Sem 2</option>
              <option value="Sem 3">Sem 3</option>
              <option value="Sem 4">Sem 4</option>
              <option value="Sem 5">Sem 5</option>
              <option value="Sem 6">Sem 6</option>
              </select>
              <input type="text" placeholder='Attendance out of 200 working days'  value={val.attandance} className='batch-sem-at' name='attandance' onChange={Getdata}/>
              </div>
             <div className="internal"><label htmlFor="">Internal Marks</label></div>
              <div className='internal-mark'>
                <label htmlFor="">Chemistry : </label>
                <input type="text" className='sub-mark' name='internalChe'  value={val.internal.internalChe} onChange={GetInternalmark}/>
                <label htmlFor="">Physics : </label>
                <input type="text" className='sub-mark' name='internalPhy'  value={val.internal.internalPhy}  onChange={GetInternalmark}/>
                <label htmlFor="">Maths : </label>
                <input type="text" className='sub-mark' name='internalMath'  value={val.internal.internalMath}  onChange={GetInternalmark}/>
              </div>
              <div className="internal"><label htmlFor="">Test Score</label></div>
              <div className='internal-mark'>
                <label htmlFor="">Chemistry : </label>
                <input type="text" className='sub-mark' name='testChe'  value={val.test.testChe} onChange={GetTestmark}/>
                <label htmlFor="">Physics : </label>
                <input type="text" className='sub-mark' name='testPhy'  value={val.test.testPhy} onChange={GetTestmark}/>
                <label htmlFor="">Maths : </label>
                <input type="text" className='sub-mark' name='testMath'  value={val.test.testMath} onChange={GetTestmark}/>
              </div>
              <div>
                <input type="file" className='file' name='photo'  onChange={Upload} />
              </div>
              <div className='stude-dp'><img src={val.photo} alt="" /></div>
            <button onClick={Edit}>Edit</button>
            <ToastContainer
                            position="top-right"
                            autoClose={5000}
                            hideProgressBar={false}
                            newestOnTop={false}
                            closeOnClick
                            rtl={false}
                            pauseOnFocusLoss
                            draggable
                            pauseOnHover
                            theme="dark"
              />
            </form>
       
            {/* <div  className='admn-reg-ihave-ac'><Link to='/studentlogin'>I have an account</Link></div> */}
        </div>
      </div>
    </div>
  )
}

export default StudentEdit
