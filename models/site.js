var mongoose = require("mongoose");
var schema = require("./schemas/site_schema");

exports = module.exports = mongoose.model('Site', schema);