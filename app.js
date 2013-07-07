var express = require('express');
var http = require('http');
var path = require('path');
var hbs = require('hbs');
  
var app = express();

// Universal environment settings
app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/templates');
  app.set('view engine', 'hbs');
  app.use(express.bodyParser());
  app.use(express.cookieParser("secret_code_goes_here"));
  app.use(express.session());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(require('less-middleware')({ src: __dirname + '/public' }));
  app.use(express.static(path.join(__dirname, 'public')));
  app.use(express.errorHandler());
});

app = (require("./config"))(app);

server = http.createServer(app);
server.listen(app.get('port'), function(){
  console.log("Express running on " + app.get("port"));
});