const express = require('express')
const app = express()
app.get('/', function (request, response) {
    response.send('Webserver asrul.dev')
})
app.get('/cari-jodoh', function (request, response) {
    response.send('Cari jodoh dengan http ' + request.method)
})
app.post('/cari-jodoh', function (request, response) {
    response.send('Cari jodoh dengan http ' + request.method)
})
app.put('/cari-jodoh', function (request, response) {
    response.send('Cari jodoh dengan http ' + request.method)
})
app.delete('/cari-jodoh', function (request, response) {
    response.send('Cari jodoh dengan http ' + request.method)
})
app.listen(5000, function () {
    console.log(`Server running on http://localhost:5000`)
})
module.exports = app