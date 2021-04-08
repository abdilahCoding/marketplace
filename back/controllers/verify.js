const Seller = require('../models/sellerModel')
 const validation = require("../middlewares/validation");
 const bcrypt = require("bcrypt");
require('dotenv').config();



exports.verifyPass = async (req, res) => {
   
  const newPassword = req.body.password
  const sentToken = req.body.token
  console.log("sentToken");
  console.log(sentToken);
  Seller.findOne({resetToken:sentToken})
  .then(user=>{
      console.log(user);
      if(!user){
          return res.status(422).json({error:" expired"})
      }
      
      bcrypt.hash(newPassword,10).then(hashedpassword=>{
         user.password = hashedpassword
         user.resetToken = undefined
         user.expireToken = undefined
         user.save().then((saveduser)=>{
             res.json({message:"success"})
         })
      })
  }).catch(err=>{
      console.log(err)
  })


}
