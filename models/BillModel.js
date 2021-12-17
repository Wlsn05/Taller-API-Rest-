'use strict'

const mongoose = require('mongoose')

const { Schema } = mongoose

const BillSchema = new Schema({
    billNumber: {
        type: String,
        required: true,
        unique: true
    },
    billDate: {
        type: Date,
        default: Date.now
    },
    typePay: {
        type: Boolean,
        required: true
    },
    producto: [{
        producto: {
            type: Schema.Types.ObjectId,
            ref: "product"
        },
        cant: Number
    }],
    valorTotal: Number,

})

module.exports = mongoose.model('bill', BillSchema)