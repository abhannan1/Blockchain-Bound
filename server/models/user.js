const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    name:{
        type:String,
        require:true,
    },
    username:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        default:false,

    },
    password:{
        type:String,
        select:false,
        require:true
    },
    
},
{timestamps:true}
) 

//User we will import by it
//userSchema name of schema
//users collection in database

module.exports = mongoose.model("User", userSchema, "users")