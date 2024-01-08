const jwt = require("jsonwebtoken");
const z = require("zod");
// Middleware for handling auth
const jwtPassword = require("../index")
//Zod Schema Validation
const tokenZ = z.string();

function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    const token = req.headers['authorization'];
    const arr = token.split(" ");
    const jwtToken = arr[1];
    const parsedToken = tokenZ.safeParse(token);
    if (parsedToken.success == true) {
        try {
            const decodedValue = jwt.verify(jwtToken, jwtPassword);
            if(decodedValue.username){
                req.username = decodedValue.username;
                next();
            }
            else {
                res.status(403).json({
                    msg: "You are not authenticated"
                })
            }
        } catch (err) {
            res.status(404).send("Invalid Token");
        }
    } else res.status(404).send("Invalid Token")
}

module.exports = userMiddleware;