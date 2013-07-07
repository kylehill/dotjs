var mongoose = require("mongoose");
var schema = require("./schemas/visit_schema");

exports = module.exports = mongoose.model('Visit', schema);