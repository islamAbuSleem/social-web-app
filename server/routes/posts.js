const router = require('express').Router();
const { createPost, getPosts } = require('../controllers/posts')
const multer = require('multer');
const { upload } = require('../middlewares/multerStorage');


router.get('/', getPosts);

router.post('/create-post', upload.single('image'), createPost);

module.exports = router;