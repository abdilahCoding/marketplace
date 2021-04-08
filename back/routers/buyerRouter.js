const express = require("express")
const {BuyerSignin, BuyerSingup, BuyerSignout} = require('../controllers/buyerController')
const router = express.Router()


router.post("/singnup", BuyerSingup)
router.post("/singnin", BuyerSignin)
router.get("/singnout", BuyerSignout)




module.exports = router