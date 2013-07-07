var mongoose = require("mongoose");

exports = module.exports = new mongoose.Schema({
  
  subdomain: { type: String, required: true, index: { unique: true } },
  url: { type: String, required: true },
  repo: { type: String },
  docs: { type: String },
  author: { type: String }
  
});