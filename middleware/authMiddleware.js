const jwt = require('jsonwebtoken');
const User = require('/models/User');

module.exports = function (req, res, next) {
    const token = req.header('Authorization');

    if (!token) {
        return res.status(401).json({ msg: 'Denied' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        req.user = decoded.user;
        next();
    } catch (err) {
        res.status(401).json({ msg: 'invalid Token' });
    }
};
