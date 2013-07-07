var async = require("async");
var npm = require("npm");
var u = require("underscore");

var findFromDb = function(sub, callback) {
  
  /*findFromDb: function(callback) {
    app.models.Site.findOne({ subdomain: sub }).exec(function(err, entry){
      if (results.findSite && results.findSite.url) {
        return app.views.redirect(req, res, results.findSite.url);
        callback("drop");
      }
      else {
        callback(null);
      }
    });
  },*/
  
  callback(null);
  
};

var findFromNpm = function(sub, callback) {
  
  npm.load({ "fetch-retry-mintimeout" : 100, "fetch-retry-maxtimeout" : 100 }, function(err, npm){
    if (err) { callback(err); }
    
    npm.view(sub, function(err, entry){
      if (entry) {
        var entry = u.first(u.values(entry));
        
        var url = entry.homepage || entry.url;
        
        url = url || (entry.repository && entry.repository.url ? "http://" + entry.repository.url.split("://")[1] : "")
        
        url = url || "https://npmjs.org/package/" + sub;
        
        return callback(null, url)
      }
      return callback(null);
    });
  });
  
};

var findFromBower = function(sub, callback) {
  callback(null);
};

var getSiteUrl = function(sub, callback) {
  
  if (!sub) {
    return callback(null);
  }
  
  async.auto({
    
    findFromDb: function(callback){ findFromDb(sub, callback); },

    findFromNpm: function(callback, results){ findFromNpm(sub, callback) },
    
    findFromBower: function(callback, results){ findFromBower(sub, callback) }
    
  }, function(err, results){
    if (err) { callback(err); }
    
    callback(null, results.findFromDb || results.findFromNpm || results.findFromBower);
  });
  
}

exports = module.exports = getSiteUrl;