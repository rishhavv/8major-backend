const express = require("express");
const router = express.Router();

var volunteerArray = [];
var missingArr = [];
var communityPosts = [];

router.post("/add-volunteer", (req, res) => {
  try {
    volunteerArray.push(req.body);
    console.log(volunteerArray);
    res.status(200).json({
      msg: "success",
    });
  } catch (err) {
    console.log(err);
  }
});
router.get("/volunteer", (req, res) => {
  try {
    res.status(200).json({
      data: volunteerArray,
    });
  } catch (err) {
    console.log(err);
  }
});

router.post("/report/missing", (req, res) => {
  try {
    missingArr.push(req.body);
    console.log(missingArr);
    res.status(200).json({
      msg: "success",
    });
  } catch (err) {
    console.log(err);
  }
});
router.get("/report/missing", (req, res) => {
  try {
    res.status(200).json({
      data: missingArr,
    });
  } catch (err) {
    console.log(err);
  }
});

router.post("community/add", (req, res) => {
  try {
    communityPosts.push(req.body);
    console.log(communityPosts);
    res.status(200).json({
      msg: "success",
    });
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
