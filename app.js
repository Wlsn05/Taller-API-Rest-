'use restrict'
const express = require('express')
const app = express()
require('./drivers/connect-mongo')
//settings
app.set('port',process.env.PORT || 3000)

//middleware
app.use(express.json())
app.use(express.urlencoded({extended:true}))
//routes
app.use('/bill',require('./routes/billRoutes.js'))
app.use('/product',require('./routes/productRoutes.js'))

module.exports = app