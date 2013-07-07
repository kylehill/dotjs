exports = module.exports = function(app) {
  
  app.get("/", app.controllers.landing);
  
  app.get("/:sub", app.controllers.landing);
  
  return app;
  
};