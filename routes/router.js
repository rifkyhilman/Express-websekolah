const router = require('express').Router()

router.get('/', function (request, response) {
    response.send('Webserver asrul.dev')
})
router.get('/login', function (request, response) {
    response.send('Cari jodoh dengan http ' + request.method)
})
router.post('/register', function (request, response) {
    response.send('Cari jodoh dengan http ' + request.method)
})
router.put('/change-profile', function (request, response) {
    response.send('Cari jodoh dengan http ' + request.method)
})
router.delete('/delete-account', function (request, response) {
    response.send('Cari jodoh dengan http ' + request.method)
})

module.exports = router