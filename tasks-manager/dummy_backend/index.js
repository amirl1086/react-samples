const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const uuid = require("uuid");
const port = 3030;

app.use(cors());
app.use(bodyParser.json());

const db = {};

app.post("/new-task", (req, res) => {
  try {
    const id = uuid.v4();
    db[id] = req.body;
    res.status(200).json({name: id});
  } catch (e) {
    console.error(`error saving ${req.body.title} to db, error message: ${e}`);
    res.status(500).end();
  }
});

app.get("/tasks", (req, res) => {
  res.status(200).json(db);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
