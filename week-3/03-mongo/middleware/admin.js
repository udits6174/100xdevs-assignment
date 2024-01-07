const {Admin} = require('../db/index');

// Middleware for handling auth
async function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const name = req.headers['username'];
    const pw = req.headers['password'];
    const admin = await Admin.findOne({
        username: name,
        password: pw
    });
    if(admin == null)
        res.status(403).json({
            msg: "Unauthorized Access"
        })
    else
        next();
}

module.exports = adminMiddleware;