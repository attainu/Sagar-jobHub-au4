const jwt = require('jsonwebtoken');

const varify = (req, res, next) => {
    const token = req.header('auth_token');
    if (!token) return res.status(401).send('access token');
    try {
        var decoded = jwt.verify(token, process.env.TOKEN_SECRET);
        req.user = decoded;
        next();
    } catch (err) {
        // err
    }
}

module.exports = varify;