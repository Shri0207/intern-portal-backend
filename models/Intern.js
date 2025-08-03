const mongoose = require("mongoose");

const internSchema = new mongoose.Schema({
  name: String,
  referralCode: String,
  totalDonations: Number,
  rewards: [String]
});

module.exports = mongoose.model("Intern", internSchema);