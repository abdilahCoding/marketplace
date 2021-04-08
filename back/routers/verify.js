const express = require("express")
const {verifyPass} = require('../controllers/verify')
const router = express.Router()


router.post("/verify",verifyPass)






module.exports = router