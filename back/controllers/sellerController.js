const Seller = require('../models/sellerModel')
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const nodemailer = require('nodemailer')
const crypto = require('crypto');
const _=require('lodash')
 const validation = require("../middlewares/validation");
require('dotenv').config();
    

  

exports.SellerSingin = async (req, res) => {
    // LETS VALIDATE THE DATA BEFORE WE ADD A USER
    console.log(req.body);
  const { error } = validation.loginSellerValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  // chk if new user already in db
  const seller = await Seller.findOne({ email: req.body.email });
  if (!seller) return res.status(400).send("Email  is wrong");
  
  // chk if password is correct
  const validPass = await bcrypt.compare(req.body.password, seller.password);
  if (!validPass) return res.status(400).send("password is wrong");

  // create and assign a token
  const token = jwt.sign({sellerInfo: seller}, process.env.TOKEN_SECRET);
  res.send({seller,token});
}

exports.SellerSingup = async (req, res) => {
    // LETS VALIDATE THE DATA BEFORE WE ADD A USER
  const { error } = validation.registerValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  // chk if new user already in db

  const emailExist = await Seller.findOne({ email: req.body.email });
  if (emailExist) {
    return res.status(400).send("Email already exists");
  }

  // hash passwords
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(req.body.password, salt);
    console.log(req.body); 
    const{name,lastName,email} =req.body
    // const user = new User(_.pick(req.body.value,['first_Name','last_Name','email','hashPassword']));

  const seller = new Seller({
    name,
    lastName,
    email,
    password:hashPassword
  
  });

  // save new user
  try {
    

    crypto.randomBytes(32,async (err,buffer)=>{
      let transporter = await nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
          user: 'abdilahelaidii@gmail.com',
         pass: 'klfjdkdrakvbhkuq'
        },
      })
      if(err){
          console.log(err)
      }
       token = buffer.toString("hex")
       
       console.log(token);
       let info = await transporter.sendMail({
        from: 'abdilahelaidii@gmail.com', // sender address
        to: email, // list of receivers
        subject: "new password ✔", // Subject line
        text: "Hello Seller?", // plain text body
        html: `http://127.0.0.1:3001/verify/${token}`, // html body
      });
   
   
      seller.resetToken = token
    const savedSeller = await seller.save();
     res.send(_.pick(savedSeller,['_id','first_Name','last_Name','email']));
    })
  } catch (err) {
    res.send(err);
  }
  console.log(req.body);
}

exports.sellerSignout = (req, res) => {
    res.clearCookie("token")

    res.json({
        message : "User is Signout"
    })
}
exports.getOneSeller = (req, res) => {
   
    res.json({
        seller: req.profile
    })
}

exports.updateOneSeller = (req, res) => {
   Seller.findOneAndUpdate({_id: req.profile._id}, {$set: req.body}, {new: true}, (err, seller) => {

    if(err){
        return res.status(400).json({err})
    }

    res.json({seller})
   })
}