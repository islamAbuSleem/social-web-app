const router = require('express').Router()
const { getUser, getSingleUser } = require('../controllers/users');

router.get('/', getUser)

router.get('/:id', getSingleUser)



module.exports = router
