// import all package use in nodejs
const express = require("express")
const mongoose = require("mongoose");
const expressValidator = require('express-validator')
const cookieParser = require('cookie-parser')
const cors = require("cors")
const bodyParser= require('body-parser');

// inport all routers
const sellerRouter = require("./routers/sellerRouter")
const buyerRouter = require("./routers/buyerRouter")
// const categoryRouter = require("./routers/categoryRouter")
const productRouter = require("./routers/productRouter")
const Verify = require("./routers/verify")




// config app
const app = express();
require("dotenv").config()
app.use(express.json())
app.use(expressValidator())
app.use(cookieParser())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(cors());
app.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers","auth-token");
    res.header("Access-Control-Allow-Methods","*");
    next();
    });

// data base connect
mongoose.connect(process.env.DATABASE, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('db is connected'))
  .catch(err => console.log('not connect to the database'))



app.use('/api/seller', sellerRouter)
app.use('/api/buyer', buyerRouter)
app.use('/api', Verify)
// app.use('/api/category', categoryRouter)
app.use('/api/product', productRouter)



// run server
const port = process.env.PORT || 3000;
app.listen(port, ()  => {
    console.log(`server is running in port: ${port}`)
})

