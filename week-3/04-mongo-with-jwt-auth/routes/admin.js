const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const {Admin, Course} = require('../db/index')
const jwt = require("jsonwebtoken");
const {jwtPassword} = require("../KeyExport")
// Admin Routes
router.post('/signup', async(req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;
    const admin = await Admin.create({
        username,
        password
    });

    if(admin)
        res.json({
            msg: "Admin created successfully "
        })
    else
        res.status(400).send();
});

router.post('/signin', async(req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;
    const admin = await Admin.findOne({
        username,
        password
    });
    if(admin){
        const token = jwt.sign({username}, jwtPassword);
        res.send(token);
    }else{
        res.status(411).json({
            message: "Incorrect credentials"
        })
    }
});

router.post('/courses', adminMiddleware, async(req, res) => {
    // Implement course creation logic
    const title = req.body.title;
    const description = req.body.description;
    const imageLink = req.body.imageLink;
    const price = req.body.price;
    const course = await Course.create({
        title,
        description,
        imageLink,
        price
    })
    if(course)
        res.json({
            msg: "Admin created successfully ",
            courseId: course._id,
        })
    else
        res.status(400).send();
});

router.get('/courses', adminMiddleware, async(req, res) => {
    // Implement fetching all courses logic
    const allCourses = await Course.find({});
    if(allCourses)
        res.json({
            courses: allCourses
        })
    else
        res.status(400).send();
});

module.exports = router;