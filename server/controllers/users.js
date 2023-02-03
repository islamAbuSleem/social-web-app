const User = require('../models/user')
const bcrypt = require('bcrypt');

const {validateRegister} = require('../helpers/users/validations');

module.exports.register = async (req, res, next)=> {
    const {error} = validateRegister(req.body)
    if(error){
        return res.status(400).send(error.details[0].message)
    }
    
    let userExist = await User.findOne({where: {email: req.body.email}})
    if(userExist){
       return res.status(409).send('user already exist')
    }

    let user = await User.build(req.body);
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(user.password, salt);
    
    user.password = hash;
    await user.save();
    res.status(200).send('user created successfully');


}

module.exports.getUser = (req, res, next)=> {
    res.send('all users')
}
module.exports.getSingleUser = (req, res, next)=> {
    res.send('single users')
}
