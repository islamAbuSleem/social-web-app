module.exports.getUser = (req, res, next)=> {
    res.send('all users')
}
module.exports.getSingleUser = (req, res, next)=> {
    res.send('single users')
}