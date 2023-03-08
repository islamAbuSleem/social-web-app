const User = require('../models/user')
const bcrypt = require('bcrypt');
const _ = require('lodash')

const { validateRegister, validateLogin } = require('../helpers/users/validations');

module.exports.register = async (req, res, next) => {
    const { error } = validateRegister(req.body)
    if (error) {
        return res.status(400).send(error.details[0].message)
    }

    let userExist = await User.findOne({ where: { email: req.body.email } })
    if (userExist) {
        return res.status(409).send('user already exist')
    }

    let user = await User.build(req.body);
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(user.password, salt);

    user.password = hash;
    await user.save();

    user.token = user.generateToken()
    const userProperries = _.pick(user, ['username', 'email', 'name', 'coverPic', 'profilePic', 'city', 'website'])
    console.log( user.token)
    res.cookie("accessToken", user.token, {
        httpOnly: true
    }).status(200).send({message:'user created successfully', user:userProperries})
}

module.exports.login = async (req, res, next) => {
    const { error } = validateLogin(req.body);
    if (error) {
        return res.status(500).send(error.details[0].message);
    }

    let user = await User.findOne({ where: { email: req.body.email } });
    if (!user) {
        return res.status(404).send('user not found');
    }

    const passwordCheck = bcrypt.compareSync(req.body.password, user.password);

    if (!passwordCheck) {
        return res.status(401).send('email or password is wrong');
    }

    user.token = user.generateToken()
    const userProperries = _.pick(user, ['username', 'email', 'name', 'coverPic', 'profilePic', 'city', 'website'])
    res.cookie("accessToken", user.token, {
        httpOnly: true
    }).status(200).json(userProperries)

}

module.exports.logOut = (req, res, next)=>{
    res.clearCookie("accessToken",{
        secure: true,
        sameSite: 'none'
    }).status(200).send('user has been logged out')
}

module.exports.getUser = (req, res, next) => {
    res.send('all users');
}
module.exports.getSingleUser = (req, res, next) => {
    res.send('single users');
}
