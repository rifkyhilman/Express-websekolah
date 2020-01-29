const express = require('express')
const app = express()
const router = require('./routes/router.js')

app.use('/', router)

app.listen(4000, function () {
    console.log(`Server running on http://localhost:4000`)
})


module.exports = app