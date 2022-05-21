const express = require("express");
const router = express.Router();

var volunteerArray = [];

router.post("/add-volunteer", (req, res) => {
  try {
    volunteerArray.push(req.body);
    console.log(volunteerArray);
    res.status(200).send("ss");
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
