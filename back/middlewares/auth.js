const jwt = require("jsonwebtoken");
require('dotenv').config();

exports.sellerAth = function(req, res, next) {
  const token = req.header("auth-token");
  console.log(token)
  if(!token){
    return res.send("Access Denied");
  } 

  try {
    const verified = jwt.verify(token, process.env.TOKEN_SECRET);
    req.seller = verified;
    console.log('user' + JSON.stringify(req.seller));
    console.log('good')
    next();
  } catch (err) {
    res.send("Invalid Token");
  }

};

exports.buyerAth = function(req, res, next) {
  const token = req.header("auth-token");
  console.log(token)
  if(!token){
    return res.send("Access Denied");
  } 

  try {
    const verified = jwt.verify(token, process.env.TOKEN_SECRET);
    req.user = verified;
    console.log('good')
    next();
  } catch (err) {
    res.send("Invalid Token");
  }

};
