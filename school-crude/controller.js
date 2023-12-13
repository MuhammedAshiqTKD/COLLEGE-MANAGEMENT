// import movie_schema from "./model/movie.model.js";
import Admin_schema from "./user.model.js"
import Staff_schema from "./staff.model.js"
import bcrypt from "bcrypt";
import pkg from "jsonwebtoken";
const { sign } = pkg;






// export function addtask(req,res){
//     try {
//     const {...movies}=req.body
//     console.log(req.body);
//     res.status(201).send(movie_schema.create({...movies}));

//     } catch (error) {
//         res.status(404).send(error);

//     }


// }
// export async function getdata(req,res){
//     let task=await movie_schema.find()
//         res.status(200).send(task)


// }
// export async function getDetails(req,res){
//     const{id}=req.params;
//     console.log(id);
//     let movie= await movie_schema.findOne({_id:id});
//     console.log(movie);
//     res.status(200).send(movie)
// }

// export async function delMovie(req,res){
//     const{id}=req.params;
//     console.log(id);
//     const data=movie_schema.deleteOne({_id:id})
//     data.then((resp)=>{
//         res.status(200).send(resp)
//     }).catch((error)=>{
//         res.status(404).send(error)
//     })
// }
// export async function edit(req,res){
//     const{id}=req.params;
//     const{...movie}=req.body;
//      await movie_schema.updateOne({_id:id},{$set:{...movie}});
//     console.log(movie);
//     res.status(200).send("updated")
// }    




export function addStaff(req, res) {

  try {
    const {empid,username,name,password,passwordchecked,email,phone,designation,salary,exp,address,photo,admin  } = req.body;
    console.log(empid,username,name,password,passwordchecked,email,phone,designation,salary,exp,address,photo,admin);
    if (!(empid&&username&&name&&password&&passwordchecked&&email&&phone&&designation&&salary&&exp&&address&&photo,admin))
      return res.status(404).send("fields are empty")

    bcrypt.hash(password, 10)
      .then((hashedPwd) => {
        Staff_schema.create({empid,username,name,password: hashedPwd,email,phone,designation,salary,exp,address,photo,admin });
      })
      .then(() => {
        res.status(201).send("sucessfully registered")
      })
      .catch((error) => {
        res.status(500).send(error)
      })

  } catch (error) {
    console.log(error);

  }

}












export function addUser(req, res) {

  try {
    const { name, username, password } = req.body;
    console.log(name, username, password);
    if (!(name && username && password))
      return res.status(404).send("fields are empty")

    bcrypt.hash(password, 10)
      .then((hashedPwd) => {
        Admin_schema.create({ name, username, password: hashedPwd });
      })
      .then(() => {
        res.status(201).send("sucessfully registered")
      })
      .catch((error) => {
        res.status(500).send(error)
      })

  } catch (error) {
    console.log(error);

  }

}



export async function login(req, res) {
  try {
    console.log(req.body);
    const { username, password } = req.body;
    const usr = await Admin_schema.findOne({ username })
    console.log(usr);
    if (usr === null) return res.status(404).send("username or password doesnot exist");
    const success = await bcrypt.compare(password, usr.password)
    console.log(success);
    if (success !== true) return res.status(404).send("username or password doesnot exist");
    const token = await sign({ username }, process.env.JWT_KEY, { expiresIn: "24h" })
    console.log(token);
    res.status(200).send({ msg: "successfullly login", token })
    res.end();

  } catch (error) {
    console.log(error);

  }
}


export async function home(req, res) {
  try {

    console.log(req.user);
    const username = req.user.user;
    console.log(username);
    res.status(200).send({ msg: `hello ${username}` });

  } catch (error) {
    res.status(404).send(error)

  }

}



export async function getStaff(req,res){
  let task=await Staff_schema.find()
  res.status(200).send(task)
}



export function delStaffData(req,res)
{
    const{id}=req.params;
    const data= Staff_schema.deleteOne({_id:id})
    data.then((resp)=>{
        res.status(200).send(resp)
    }).catch((error)=>{
        res.status(404).send(error)
    })
}





export async function editStaffdetails(req, res) {
  const { id } = req.params;
  try {
      const updatedData = req.body;
      const value = await Staff_schema.updateOne({ _id: id }, { $set: updatedData });
      res.status(200).send(value);
  } catch (error) {
      res.status(404).send(error);
  }
}





export async function getStaffulldata(req,res){
  const{id}=req.params;
  console.log(id);
  let task=await Staff_schema.findOne({_id:id})
  console.log(task);
  res.status(200).send(task)
}