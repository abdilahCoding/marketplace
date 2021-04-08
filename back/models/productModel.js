const { ObjectId } = require("mongodb")
const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        maxlength: 32,
        trim: true,
        required: true

    },

    description: {
        type: String,
        required: true

    
    },
    price: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number
    },
    image: {
        type: String
    },
    category: {
        type: ObjectId,
        ref: 'categorys',
        // require: true
    },
    sellerItems: {
        type: ObjectId,
        ref: 'sellers',
        // require: true
    },
    shipping: {
        type: Boolean,
        default: false,
        // required: false
    },
    sold: {
        type: Number,
        default: 0
    }
}, {timestamps: true})

module.exports = mongoose.model("products", productSchema)