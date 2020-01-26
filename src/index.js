const express = require('express')
const app = express()


app.get('/', function (request, response) {
    response.send('Webserver asrul.dev')
})
app.listen(5000, function () {
    console.log(`Server running on http://localhost:5000`)
})
module.exports = app