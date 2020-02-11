const router = require('express').Router()
const data = require('../controller/data.controller.js')
const user = require('./user.router.js')

router.use('/users', user)

router.get('/', function (request, response) {
    response.send('Webserver asrul.dev')
})


router.get('/login', data.getData)

router.post('/register', data.setData)

router.put('/change-profile', data.updateData)

router.delete('/delet-account', data.deleteData)

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