import express from "express";
import bodyParser from "body-parser";
import tasks from "./Routing/tasks.js";
import habits from "./Routing/habits.js";
import auth from "./Routing/auth.js";
import cors from "cors";
// const express = require('express')
const app = express();
const port = 8080;

var jsonParser = bodyParser.json();
app.use(express.json());
app.use(cors());

app.use("/task", tasks);

app.use("/habit", habits);

app.use("/auth", auth);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
