const express = require("express");
const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  RollNo: { type: Number, required: true },
  Name: { type: String, required: true },
  Email: { type: String, required: true },
});

const User = mongoose.model("user", userSchema);
module.exports = User;
