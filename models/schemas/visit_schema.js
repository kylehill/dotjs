var mongoose = require("mongoose");

exports = module.exports = new mongoose.Schema({

  site: { type: mongoose.Schema.Types.ObjectId, ref: 'Site' },
  path: { type: String },
  time: { type: Date, default: Date.now },
  ip: { type: String }

});