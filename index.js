'use strict'

const app = require('./app')

app.listen(app.get('port'),() =>{
    console.log(`Server listen to port ${app.get('port')}`)
})