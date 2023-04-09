const Post = require('../models/post');
const _ = require('lodash');


module.exports.createPost = async (req, res, next) => {
    const post = await Post.create({ description: req.body.description, userId: res.locals.userId, image: req.file.filename });
    return res.status(201).send(post)
}


module.exports.getPosts = async (req, res, next) => {
    const posts = await Post.findAll()
    posts.forEach(el => {
        el.image = req.protocol + '://' + req.get('host') + '/' + el.image
    })
    return res.status(200).send(posts)
}