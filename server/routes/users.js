const router = require('express').Router()
const user = require('../controllers/users');

router.get('/', user.getUser)

router.get('/:id', user.getSingleUser)

module.exports = router
