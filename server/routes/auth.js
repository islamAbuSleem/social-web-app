const router = require('express').Router()
const { register } = require('../controllers/users')

router.post('/add-user',register)

module.exports = router