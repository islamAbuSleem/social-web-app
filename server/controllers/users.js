const sequelize = require('../DB/dbConfig')

module.exports.register = (req, res, next)=> {
    
    res.send('add user')
}
module.exports.getUser = (req, res, next)=> {
    res.send('all users')
}
module.exports.getSingleUser = (req, res, next)=> {
    res.send('single users')
}
