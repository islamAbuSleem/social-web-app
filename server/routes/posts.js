const router = require('express').Router();
const { createPost } = require('../controllers/posts')
const multer = require('multer');
const { upload } = require('../middlewares/multerStorage');



router.post('/create-post', upload.single('image'), createPost)

module.exports = router;