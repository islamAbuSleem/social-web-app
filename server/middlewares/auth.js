const jwt = require('jsonwebtoken');

module.exports.verifyUser = (req, res, next) => {
    const token = req.cookies.accessToken;
    if (!token) return res.status(401).send('please login to add post');

    try {
        var decoded = jwt.verify(token, process.env.jwtPrivteKey);
        if (decoded) {
            res.locals.userId = decoded.id
            return next()
        }
    } catch (err) {
        return res.status(401).send('invalid token')
    }
}