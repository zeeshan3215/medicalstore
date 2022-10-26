const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization;
       // console.log(token,'tokennnnnnnnnnnnnn');
        const decoded = jwt.verify(token, process.env.JWT_KEY);
        req.userData = decoded;
        next();
    } catch (error) {
        next({
            message: 'Auth failed',
            status: 401
        });
    }
};