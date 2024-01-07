const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db/index");
// User Routes
router.post("/signup", async (req, res) => {
  // Implement user signup logic
  const name = req.body.username;
  const pw = req.body.password;

  const user = await User.create({
    username: name,
    password: pw,
  });

  if (user)
    res.json({
      msg: "user created successfully ",
    });
  else res.status(400).send();
});

router.get("/courses", async (req, res) => {
  // Implement listing all courses logic
  const courses = await Course.find({});

  if (courses)
    res.json({
      courses,
    });
  else res.status(400).send();
});

router.post("/courses/:courseId", userMiddleware, async (req, res) => {
  // Implement course purchase logic
  const courseId = req.params.courseId;
  const username = req.headers.username;
  try {
    const course = await Course.findOne({
        _id: courseId
    })
    if(course){
        await User.updateOne(
        { username: username },
        { $push: { purchasedCourses: courseId } }
        );
            
        res.json({
            message: 'Course purchased successfully',
        });
    }else{
        res.status(404).send("No course with given id");
    }
  } catch (err) {
    res.status(404).send();
  }
});

router.get("/purchasedCourses", userMiddleware, async (req, res) => {
  // Implement fetching purchased courses logic
  const username = req.headers.username;
  const user = await User.findOne({ username });
  console.log(user);
  const courses = await Course.find({
    _id: {
      $in: user.purchasedCourses,
    },
  });
  res.json({
    courses,
  });
});

module.exports = router;
