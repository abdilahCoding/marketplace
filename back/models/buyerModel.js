const mongoose = require('mongoose')

const buyerSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        maxlength: 50,
        required: true
    },
      lastName: {
        type: String,
        trim: true,
        maxlength: 50,
        required: true
    },
    adress: {
        type: String,
        trim: true,
        maxlength: 50,
        required: true
    },

    email: {
        type: String,
        trim: true,
        maxlength: 50,
        required: true,
        unique: true
    },
    resetToken:String,
    expireToken:Date,
    password: {
        type: String,
        required: true
    },
    
    type:{
        type: String,
        default:'buyer'
      
    },
   
    
   
}, {timestamps: true})



// Crypter le mot pass et userSchema
// 1- creat virtuel password in userSchema


module.exports = mongoose.model("buyers", buyerSchema)