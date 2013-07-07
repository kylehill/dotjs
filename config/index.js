exports = module.exports = function(app) {

  app = (require("./lib"))(app);

  app = (require("./models"))(app);

  app = (require("./views"))(app);
  
  app = (require("./controllers"))(app);
  
  app = (require("./routes"))(app);
  
  return app;
};