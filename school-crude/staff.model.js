import mongoose from "mongoose";


const Staff_schema = new mongoose.Schema({
    empid: {type: String},
    username: {type: String},
    name: {type: String},
    password: {type: String},
    passwordchecked: {type: String},
    email: {type: String},
    phone: {type: String},
    designation: {type: String},
    salary: {type: String},
    exp: {type: String},
    address: {type: String},
    photo: {type: String},
    admin:{type:String}

})



export default mongoose.model.staff || mongoose.model("staff", Staff_schema);