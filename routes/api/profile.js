const express = require("express");
const router = express.Router();

//@route      GET api/profile/test
//@desc       Tests post route
//@access     Public
router.use("/test", (req, res) => res.json({ msg: "Profile Works" }));

module.exports = router;
