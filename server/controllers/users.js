const User = require('../models/user')

module.exports.register = async (req, res, next)=> {
    console.log(req.body)
    let user = await User.findOne({where: {email: req.body.email}})
    if(user){
        res.send(user)
    }else{
        res.send('does not exist')
    }
}
module.exports.getUser = (req, res, next)=> {
    res.send('all users')
}
module.exports.getSingleUser = (req, res, next)=> {
    res.send('single users')
}
