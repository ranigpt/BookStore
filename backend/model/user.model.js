const mongoose = require ('mongoose');
const { use } = require('../route/book.route');

const userschema = mongoose.Schema(
    {

        fullname :{
            type:String,
            required:true
        },

        dob:{
            type:Date,
            required:true
        },

        email :{
            type:String,
            required:true
        },

        password:{
            type:String,
            required:true
        },

    }
)


const user = mongoose.model("User" , userschema)

module.exports = user;