import React, { useEffect, useState } from 'react'
import './Studentregistration.css'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
const Studentreg = () => {

  const [username, setUsername] = useState("");
  const navigate=useNavigate();
  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setUsername(JSON.parse(storedUsername));
    }
  }, []);

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

  const Getdata=(e)=>{ 
    // console.log(e.target.value);
    setVal((pre)=>({...pre,[e.target.name]:e.target.value}))
    // console.log(val);
  }


  const GetInternalmark = (e) => {
    setVal((pre) => ({...pre,internal: { ...pre.internal, [e.target.name]: e.target.value },}));
  };

  const GetTestmark = (e) => {
    setVal((pre) => ({...pre,test: { ...pre.test, [e.target.name]: e.target.value },}));
  };


  // const AddStudent=async(e)=>{
  //   e.preventDefault()
  //  try {
  //   const res=await axios.post(`http://localhost:3041/college/addstudent`,{...val,photo:Photo,staff:username})
  //   console.log(res.data);
  //   if(res.status === 201){
  //     alert("Seccussfully registerd")
  //      navigate("/studentview")
  //    }
  //  } catch (error) {
  //   alert("error",error)
  //  }
   
    
  // }


  const AddStudent = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`http://localhost:3041/college/addstudent`, {...val,photo: Photo,staff: username});
      console.log(res.status);
      if (res.status !== 404) {
        alert("Successfully registered");
        navigate("/studentview");
      }
    } catch (error) {
      alert("Error: " + error); // Concatenate error with the string
    }
  };
  
 

  return (
    <div>
      {username}
       <div className="studentreg-main">
        <div className="studentreg-card">
            <div className="student-reg-card-heading"><h4>Student Register</h4></div>
          <form action="" className='student-reg-form'> 
          <div> 
            <input type="text" placeholder='Student ID' name='studentid' onChange={Getdata}/>
            <input type="text" placeholder='Full Name' name='name' onChange={Getdata}/>
          </div>
            <div>
              <input type="text" placeholder='Username' name='username' onChange={Getdata}/>
              <input type="password"  placeholder='Password' name='password' onChange={Getdata}/>
              </div>
              <div>
              <input type="text" placeholder='E mail'  name='email' onChange={Getdata}/>
              <input type="password"  placeholder='Phone' name='phone' onChange={Getdata}/>
              </div>
              <div><input type="text" placeholder='Address' className='address' name='address'onChange={Getdata} /></div>
            <div><input type="date" placeholder='Date Of Birth' name='dob' onChange={Getdata}/>
            <select name="course" id="" onChange={Getdata}>
              <option value="Select Course">Select Course</option>
              <option value="Computer Science">Computer Science</option>
              <option value="BA English">BA English</option>
              <option value="BBA">BBA</option>
              <option value="B Com">B Com</option>
              </select>
              </div>
            <div>
              <input type="text" placeholder='Batch' className='batch-sem-at' name='batch' onChange={Getdata}/>
              {/* <input type="text" placeholder='Semester' className='batch-sem-at'/> */}
              <select name="sem" id="" className='batch-sem-at' onChange={Getdata}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              </select>
              <input type="text" placeholder='Attendance out of 200 working days' className='batch-sem-at' name='attandance' onChange={Getdata}/>
              </div>
             <div className="internal"><label htmlFor="">Internal Marks</label></div>
              <div className='internal-mark'>
                <label htmlFor="">Chemistry : </label>
                <input type="text" className='sub-mark' name='internalChe' onChange={GetInternalmark}/>
                <label htmlFor="">Physics : </label>
                <input type="text" className='sub-mark' name='internalPhy' onChange={GetInternalmark}/>
                <label htmlFor="">Maths : </label>
                <input type="text" className='sub-mark' name='internalMath' onChange={GetInternalmark}/>
              </div>
              <div className="internal"><label htmlFor="">Test Score</label></div>
              <div className='internal-mark'>
                <label htmlFor="">Chemistry : </label>
                <input type="text" className='sub-mark' name='testChe' onChange={GetTestmark}/>
                <label htmlFor="">Physics : </label>
                <input type="text" className='sub-mark' name='testPhy' onChange={GetTestmark}/>
                <label htmlFor="">Maths : </label>
                <input type="text" className='sub-mark' name='testMath' onChange={GetTestmark}/>
              </div>
              <div>
                <input type="file" className='file' name='photo' onChange={Upload} />
              </div>
            <button onClick={AddStudent}>Register</button>
            </form>
       
            {/* <div  className='admn-reg-ihave-ac'><Link to='/studentlogin'>I have an account</Link></div> */}
        </div>
      </div>
    </div>
  )
}

export default Studentreg