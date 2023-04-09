const Post = require('../models/post');
const _ = require('lodash');
module.exports.createPost = (req, res, next) => {


    res.send({ data: { file: req.file, data: req.body }, message: 'success' })
}