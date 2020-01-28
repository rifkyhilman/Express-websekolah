const router = require('express').Router()
router.get('/', function (request, response) {
    response.send('Webserver asrul.dev')
})
router.get('/cari-jodoh', function (request, response) {
    response.send('Cari jodoh dengan http ' + request.method)
})
router.post('/cari-jodoh', function (request, response) {
    response.send('Cari jodoh dengan http ' + request.method)
})
router.put('/cari-jodoh', function (request, response) {
    response.send('Cari jodoh dengan http ' + request.method)
})
router.delete('/cari-jodoh', function (request, response) {
    response.send('Cari jodoh dengan http ' + request.method)
})
router.get('/about', (req, res) => {
    res.send('ini rute /about ' + req.query.nama + ' dan umurnya ' + req.query.umur)
})
router.get('/profile', (req, res) => {
    res.redirect('/login')
})
router.get('/login', (req, res) => {
    res.send('silahkan Login terlebih dahulu')
})
module.exports = router