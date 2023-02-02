const express = require("express");
const mongoose = require("mongoose");
const app = express();
const axios = require("axios");
const User = require("./Model/User");
const Parent = require("./Model/Parents");

app.use(express.json());

mongoose
  .connect("mongodb://localhost:27017/machineTask")
  .then(() => console.log("Database connected"))
  .catch((err) => console.log(err));

app.post("/", async (req, res) => {
  const { RollNo, Name, Email } = req.body;
  const user = await User.insertMany({
    RollNo: RollNo,
    Name: Name,
    Email: Email,
  });
  res.send(user);
});

app.post("/parent", async (req, res) => {
  const { RollNo, Father_Name, Mother_Name, City } = req.body;
  const parent = await Parent.insertMany({
    RollNo: RollNo,
    Father_Name: Father_Name,
    Mother_Name: Mother_Name,
    City: City,
  });
  res.send(parent);
});

app.get("/merge", async (req, res) => {
  const user = await User.find();
  const parent = await Parent.find();

  const merge = User.findOne({});

  const mergedData = {
    ...user._doc,
    ...parent._doc,
  };

  res.send(mergedData);
});

app.listen(8080, () => {
  console.log("Port is listening at 8080");
});
