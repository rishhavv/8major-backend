const express = require("express");
const bodyParser = require("body-parser");
var cors = require("cors");

const app = express();
app.use(cors());

const volunteer = require("./src/routes/route");

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.status(200).send("Server is up");
});

app.use("/major", volunteer);

app.listen(process.env.PORT || 5000, () => {
  console.log("server is up");
});
