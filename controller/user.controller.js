const model = require('../models')

function createUser(req, res) {
    model.User.create({
        name: req.body.name,
        label: req.body.label,
        picture: req.body.picture,
        email: req.body.email,
        phone: req.body.phone,
        website: req.body.website,
        summary: req.body.summary
    })
        .then(function (result) {
            res.json(result)
        })
        .catch(function (error) {
            res.json({ error: error })
        })
}
function readUser(req, res) {
}
function updateUser(req, res) {
}
function deleteUser(req, res) {
}

module.exports = {
    createUser,
    readUser,
    updateUser,
    deleteUser,
}