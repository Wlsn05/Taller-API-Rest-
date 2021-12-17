'use strict'

const { Router } = require('express')

const router = new Router()

const {
    index, 
    getBill, 
    newBill, 
    replaceBill, 
    updateBill, 
    deleteBill, 
    getProduct
} = require('../controller/billController')

//rutas para el crud del objeto bill
router.get('/',index)

router.post('/',newBill)
router.get('/:code',getBill)
router.put('/:id',replaceBill)
router.patch('/:id',updateBill)
router.delete('/:id',deleteBill)
router.get('/:id/getProduct',getProduct)


module.exports = router

