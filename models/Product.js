const mongoose = require('mongoose');   //object

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        trim:true, 
        required:true
    },
    img:{
        type:String,
        trim:true,
        required:true
    },
    price:{
        type:Number,
        min:0,
        required:true
    },
    desc:{
        type:String,
        trim:true
    },
    review:[
        {
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'Review'
        }
    ]
})

let Product = mongoose.model('Product', productSchema);

module.exports = Product;