'use strict'
const Product = require('../models/productModel')
const Bill = require('../models/BillModel')

module.exports = {
    index: async (req, res, next) => {
        try {
            const result = await Product.find({})
            res.status(200).json({ "result": "Succes", "data": result })
        } catch (err) {
            res.status(500).json({ "result": "Error", "error": err.message })
        }
    },

    newProduct: async (req, res, next) => {
        try {
            const { idBill } = req.params
            const bill = await Bill.findById(idBill)
            const product = new Product(req.body)
            product.bill = bill
            await product.save()
            bill.product.push(product)
            await bill.save()

            res.status(200).json({ "result": "Succes", "data": product })
        } catch (err) {
            res.status(500).json({ "result": "Error", "error": err.message })
        }
    },

    getProduct: (req, res, next) => {
        try {
            const { code } = req.params
            res.status(200).json({ "result": "Succes", "code": code })
        } catch (error) {
            res.status(500).json({ "result": "Error", "error": err.message })
        }
    },

    replaceProduct: (req, res, next) => {
        try {
            const { id } = req.params
            const product = req.body
            res.status(200).json({ "result": "Succes", "id": id, "data": product })
        } catch (error) {
            res.status(500).json({ "result": "Error", "error": err.message })
        }
    },

    updateProduct: (req, res, next) => {
        try {
            const { id } = req.params
            const product = req.body
            res.status(200).json({ "result": "Succes", "id": id, "data": product })
        } catch (error) {
            res.status(500).json({ "result": "Error", "error": err.message })
        }
    },

    deleteProduct: (req, res, next) => {
        try {
            const { id } = req.params
            res.status(200).json({ "result": "Succes", "id": id })
        } catch (error) {
            res.status(500).json({ "result": "Error", "error": err.message })
        }
    },
}