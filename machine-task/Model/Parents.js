const express = require("express");
const mongoose = require("mongoose");
const parentSchema = new mongoose.Schema({
  RollNo: { type: Number, required: true },
  Father_Name: { type: String, required: true },
  Mother_Name: { type: String, required: true },
  City: { type: String, required: true },
});

const Parent = mongoose.model("parent", parentSchema);
module.exports = Parent;
