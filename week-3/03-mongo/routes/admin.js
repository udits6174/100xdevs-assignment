const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const {Admin, Course} = require("../db/index")

// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    const name = req.body.username;
    const pw = req.body.password;
    //Check if exists already
    const admin = await Admin.create({
        username: name,
        password: pw
    });

    if(admin)
        res.json({
            msg: "Admin created successfully "
        })
    else
        res.status(400).send();
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
    const allCourses = await Course.find();
    if(allCourses)
        res.json({
            courses: allCourses
        })
    else
        res.status(400).send();
});

module.exports = router;