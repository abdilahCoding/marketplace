const mongoose = require("mongoose")

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: 32,
        trim: true,
        unique: true
    }
}, {timestamps: true})




let cate= mongoose.model("categorys", categorySchema)

module.exports = cate;
