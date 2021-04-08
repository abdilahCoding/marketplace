const express = require('express')
const { 
      
       proo,
       createProduct,
       productsIdSeller,
       showImageSingle
      
      } = require('../controllers/productController')
// const {userById} = require("../middlewares/user")
const {sellerAth} = require("../middlewares/auth")

const router = express.Router()

router.get('/', proo)
router.get('/sellerProduct',sellerAth, productsIdSeller)
router.post('/addProduct',[sellerAth,showImageSingle],createProduct)


// router.get('/', allProducts)
// router.get('/related/:productId', relatedProduct)
// router.get('/:productId', showProduct)
// router.get('/photo/:productId', photoProduct)
// router.post('/search', searchProduct)
// router.post('/create/:userId', [requireSignIn, isAuth, isAdmin] , createProduct)
// router.post('/create',showImageSingle,createProduct)
// router.delete('/:productId/:userId', [requireSignIn, isAuth, isAdmin] ,deleteProduct )
// router.put('/:productId/:userId', [requireSignIn, isAuth, isAdmin] , updateProduct )


// router.param("userId", userById)
// router.param("productId", productById)

module.exports = router  