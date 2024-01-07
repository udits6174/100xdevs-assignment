const {User} = require('../db/index')

async function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    const name = req.headers['username'];
    const pw = req.headers['password'];
    const user = await User.findOne({
        username: name,
        password: pw
    });
    if(user == null)
        res.status(403).json({
            msg: "User not found"
        })
    else
        next();
}

module.exports = userMiddleware;