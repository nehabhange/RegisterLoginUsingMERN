const express = require("express");
const router = express.Router();
const key = require("../config/key");
//load user model
const User = require('../models/User');


//@route GET api/user / test
//@desc  Tests user route
//@access user
router.get("/test", (req, res) => res.json({ msg: "User works" }));

module.exports = router;