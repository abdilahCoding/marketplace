const express = require("express")
const {SellerSingin, SellerSingup, sellerSignout} = require('../controllers/sellerController')
const router = express.Router()


router.post("/singnup", SellerSingup)
router.post("/singnin", SellerSingin)
router.get("/singnout", sellerSignout)




module.exports = router