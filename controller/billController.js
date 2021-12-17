'use strict'

const Bill = require("../models/BillModel")
const bill = require("../models/BillModel")

module.exports = {
    index: async (req, res, next) => {
        try {
            const result = await Bill.find({})
            return res.status(200).json({ "result": "Success", "data": result })
        } catch (err) {
            return res.status(500).json({ "result": "Error", "error": err.message })
        }
    },
    getBill: async (req, res, next) => {
        try {
            const { code } = req.params
            const result = Bill.find({ "code": code })
            return res.status(200).json({ "result": "Success", "data": code })
        } catch (err) {
            return res.status(500).json({ "result": "Error", "error": err.message })
        }
    },
    //Crear nuevo registro 
    newBill: async (req, res, next) => {
        try {
            const bill = new Bill(req.body)
            const result = await bill.save()
            return res.status(200).json({ "result": "Success", "data": result })
        } catch (err) {
            return res.status(500).json({ "result": "Error", "error": err.message })
        }
    },
    // Actualizar o reemplazar el registro
    replaceBill: async (req, res, next) => {
        try {
            const { id } = req.params
            const bill = req.body
            const result = await Bill.findByIdAndUpdate(id,bill)
            return res.status(200).json({ "result": "Success", "data": result })
        } catch (err) {
            return res.status(500).json({ "result": "Error", "error": err.message })
        }
    },
    //Editar registros
    updateBill: async (req, res, next) => {
        try {
            const { id } = req.params
            const bill = req.body
            const result = await Bill.findByIdAndUpdate(id,bill)
            return res.status(200).json({ "result": "Success", "data": result })
        } catch (err) {
            return res.status(500).json({ "result": "Error", "error": err.message })
        }
    },
    //Eliminar registro
    deleteBill: async (req, res, next) => {
        try {
            const { id } = req.params
            const result = await Bill.findByIdAndDelete(id)
            return res.status(200).json({ "result": "Success", "data": result })
        } catch (err) {
            return res.status(500).json({ "result": "Error", "error": err.message })
        }
    },
    //Agregar productos
    getProduct: async (req, res, next) => {
        try {
            const { id } = req.params
            const result = await Bill.findById(id).populate('product')
            return res.status(200).json({ "result": "Success", "data": result })
        } catch (err) {
            return res.status(500).json({ "result": "Error", "error": err.message })
        }
    }

}