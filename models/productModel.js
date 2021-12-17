'use strict'

const mongoose = require('mongoose')

const { Schema } = mongoose

const productSchema = new Schema({
    idProduct: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    value: {
        type: Number,
        require: true
    },
    stock: Number,

    dateExpired: {
        type: Date,
        require: true
    }/*,
    bill:{
        type:Schema.Types.ObjectId,
        ref:"bill"
    }*/
})
module.exports = mongoose.model("product",productSchema)