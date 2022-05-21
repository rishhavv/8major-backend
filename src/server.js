const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const volunteer = require("./routes/route");

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.status(200).send("Server is up");
});

app.use("/major", volunteer);

app.listen(3000);
