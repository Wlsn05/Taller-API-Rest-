'use strict'

const {Router} = require('express')

const router = new Router()

const {
    index,
    getProduct,
    newProduct,
    replaceProduct,
    updateProduct,
    deleteProduct
} = require('../controller/productController')

router.get('/',index)
router.get('/:code',getProduct)
router.post('/:idBill',newProduct)
router.put('/:id',replaceProduct)
router.patch('/:id',updateProduct)
router.delete('/:id',deleteProduct)

module.exports = router
