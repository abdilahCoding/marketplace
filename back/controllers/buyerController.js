const Buyer = require('../models/buyerModel')
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const _=require('lodash')
 const validation = require("../middlewares/validation");
require('dotenv').config();




exports.BuyerSignin = async (req, res) => {
    // LETS VALIDATE THE DATA BEFORE WE ADD A USER
  const { error } = validation.loginSellerValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  // chk if new user already in db
  const buyer = await Buyer.findOne({ email: req.body.email });
  if (!buyer) return res.status(400).send("Email  is wrong");
  
  // chk if password is correct
  const validPass = await bcrypt.compare(req.body.password, buyer.password);
  if (!validPass) return res.status(400).send("password is wrong");

  // create and assign a token
  const token = jwt.sign({_id: buyer.id,role:buyer.role}, process.env.TOKEN_SECRET);
  res.send({buyer,token});
}

exports.BuyerSingup = async (req, res) => {
  console.log(req.body);

    // LETS VALIDATE THE DATA BEFORE WE ADD A USER
  const { error } = validation.registerValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  // chk if new user already in db
  const emailExist = await Buyer.findOne({ email: req.body.email });
  if (emailExist) {
    return res.status(400).send("Email already exists");
  }

  // hash passwords
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(req.body.password, salt);
    // console.log(req.body.value); 
    const{name,lastName,adress,email,} =req.body
    // const buyer = new Buyer(_.pick(req.body,['name','lastName','email','hashPassword','type']));

  const buyer = new Buyer({
    name,
    lastName,
    adress,
    email,
    password:hashPassword,
    
  
  });

  //save new user
  try {

        const savedBuyer = await buyer.save();
     res.send(_.pick(savedBuyer,['_id','name','lastName','email']));
         
   
    
  } catch (err) {
    res.send(err);
  }

}

exports.BuyerSignout = (req, res) => {
    res.clearCookie("token")

    res.json({
        message : "User is Signout"
    })
}
exports.getOneBuyer = (req, res) => {
   
    res.json({
      buyer: req.profile
    })
}

exports.updateOneBuyer = (req, res) => {
   Buyer.findOneAndUpdate({_id: req.profile._id}, {$set: req.body}, {new: true}, (err, buyer) => {

    if(err){
        return res.status(400).json({err})
    }

    res.json({buyer})
   })
}




