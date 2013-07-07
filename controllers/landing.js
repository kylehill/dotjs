var u = require("underscore");

exports = module.exports = function(req, res, next) {
  app = req.app;
  
  var sub = req.param("sub") || u.last(req.subdomains);
  
  app.lib.getSiteUrl(sub, function(err, url){
    
    if (err && err !== "drop") { return app.views.err(req, res, next); }
    
    if (url) { return app.views.redirect(req, res, url); }
    
    return app.views.landing(req, res);
    
  });
}