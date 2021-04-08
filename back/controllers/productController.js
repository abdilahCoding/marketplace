const Product = require("../models/productModel")
const formidable = require('formidable');
const fs = require("fs")
const Joi = require("joi")
const path = require("path")
const lodash = require("lodash")
const multer = require('multer');

let folder= path.join(__dirname,'../../front/public');
const storage = multer.diskStorage({

    destination: (req, file, cb) => {
            cb(null, path.join(folder ,'/pics/'))
        },
    filename: (req, file, cb) => {

                //cb(null,new Date().toISOString() + file.originalname);
                cb(null, new Date().toISOString().replace(/:/g,'-')+ file.originalname)
            }

  });
  const fileFilter=(req, file, cb)=>{
    if (file.mimetype === "image/jpeg" ||  file.mimetype === "image/jpg" || file.mimetype === "image/png") {
        cb(null, true)
    } else {
        cb(null, false)
    }
}
var upload = multer()
  var upload = multer({
    storage: storage,
     limits: {
        fieldSize: 1024 * 1024 * 5
     },
    fileFilter: fileFilter

});
  exports.showImageSingle = upload.single('image');

exports.proo = (req, res) => {
    let pro =Product.find().select('-sellerItems').exec((err, products) => {
        if(err){
            return res.status(404).json({
                error: "Products not found"
            })
        }
        res.json({
            products
        })
    })
    
}
exports.productsIdSeller = (req, res) => {

    
     console.log('user' + JSON.stringify(req.seller));

  let id = req.seller._id

    let pro =Product.find({sellerItems:id}).exec((err, productsByIdSeller) => {
        if(err){
            return res.status(404).json({
                error: "Products not found"
            })
        }
        res.json({
            productsByIdSeller
        })
    })
    
}
exports.createProduct = async (req, res) => {
 
      console.log(req.file[0]);
      const schema = Joi.object({
          name: Joi.string().required(),
          description: Joi.string().required(),
          price: Joi.required(),
          quantity: Joi.required(),
          sellerItems: Joi.required(),
        //   category: Joi.required()
      })
         
      const {error} = schema.validate(req.body)

      if(error){
          return res.status(400).json({
              error: error.details[0].message
          })
        }
        const url = 'http://localhost:3001'
    
   
  const addPro= new Product({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    quantity: req.body.quantity,
    sellerItems: req.body.sellerItems,
    image: url + '/pics/' + req.file.filename,
    

  })

  try {
    const savedProds = await addPro.save();
     res.send("succes");
  } catch (err) {
    res.send('not sucess');
  }
    
}


exports.updateProduct = (req, res) => {
    
   
        const schema = Joi.object({
            name: Joi.string().required(),
            description: Joi.string().required(),
            price: Joi.required(),
            quantity: Joi.required(),
            category: Joi.required()
        })
  
        const {error} = schema.validate(fields)
         
        
  
  }

exports.productById = (req, res, next, id) => {
    Product.findById(id)
    .populate('category')
    .exec((err, product) => {
        if(err || !product){
            return res.status(400).json({
                error: "Product not found"
            })
        }

        req.product = product
        next()
    })
}


exports.showProduct = (req, res) => {
    req.product.photo = undefined

    res.json({
        product : req.product
    })
}


exports.deleteProduct = (req, res) => {
    let product = req.product

    product.remove((err, product) => {
        if(err) {
            return res.status(404).json({
                error: 'Product not Found !'
            })
        }

        res.status(204).json({})
    })
}

exports.allProducts = (req, res) => {
    let sortBy = req.query.sortBy ? req.query.sortBy : '_id';
    let order = req.query.order ? req.query.order : "asc"; // a-z not z-a il prend en consédiration l'alhabétique de les mots les produits
    let limit = req.query.limit ? parseInt(req.query.limit) : 6;
    
    let query = {}

    let {search, category} = req.query;

    if(search){
        query.name = {$regex: search, $options: 'i'}
    }

    if(category){
        query.category = category
    }

    Product.find(query)
           .select("-photo") //not show url photo in query uri
           .populate('category') // afficher la category de la produit dans uri
           .sort([[sortBy, order]])
           .limit(limit)
           .exec((err, products) => {
               if(err){
                   return res.status(404).json({
                       error: "Products not found"
                   })
               }
               res.json({
                   products
               })
           })

           // localhost:8000/api/product?limit=4&sortBy=category&order=desc
           // ---> limit = 4 product
           // ---> sortBy = {category, description, name} tu choix le propritie que tu peux filtrer
           // ---> order= (desc || asc)  ++++ decroissante || croissante ++

}

exports.relatedProduct =(req, res) => {
    let limit = req.query.limit ? parseInt(req.query.limit) : 2;

    Product.find({category: req.product.category,
                 _id: {$ne : req.product._id} // not give to me id of the product 
           })
    .limit(limit)
    .select("-photo")
    .populate('category', 'id name')
    .exec((err, products) => {
        if(err){
            res.status(404).json({
                error: "Product not found !"
            })
        }

        res.json({
            products
        })
    })

}

// search product 
exports.searchProduct = (req, res) => {
    let sortBy = req.query.sortBy ? req.query.sortBy : '_id';
    let order = req.query.order ? req.query.order : "asc"; // a-z not z-a il prend en consédiration l'alhabétique de les mots les produits
    let limit = req.body.limit ? parseInt(req.body.limit) : 100;
    let skip = parseInt(req.body.skip)
    let findArgs = {}

    console.log(req.body.filters)

    for(let key in req.body.filters){
        if(req.body.filters[key].length > 0){
       
     if(key === "price"){
                // gte - greater than price [0-10]
                // lte - less than

                findArgs[key] = {
                    $gte: req.body.filters[key][0],
                    $lte: req.body.filters[key][1]
                };
            }else{
                findArgs[key] = req.body.filters[key];
            }
        }
    }

    Product.find(findArgs)
           .select("-photo") //not show url photo in query uri
           .populate('category') // afficher la category de la produit dans uri
           .sort([[sortBy, order]])
           .limit(limit)
           .skip(skip)
           .exec((err, products) => {
               if(err){
                   return res.status(404).json({
                       error: "Products not found"
                   })
               }
               res.json({
                   products
               })
           })


}

// get photo from data base
exports.photoProduct = (req, res) => {
    const {contentType, data} = req.product.photo

    if(data) {
        res.set("Content-Type" , contentType)
        
        return res.send(data)
    }
}