const { date } = require('joi')
const mongoose = require('mongoose')

const sellerSchema = new mongoose.Schema({
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

    email: {
        type: String,
        trim: true,
        maxlength: 50,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    
    type:{
        type: String,
        default:'seller'
      
    },
    resetToken:{
        type: String,
    },
    expireToken:{
        type:Date,
        default: Date.now
    },
    sellerType:{
        type: String,
        default:'basic'
    },
    totalSeller:{
        type: Number,  
    },
    
    
   
}, {timestamps: true})




// Crypter le mot pass et userSchema
// 1- creat virtuel password in userSchema


module.exports = mongoose.model("sellers", sellerSchema)