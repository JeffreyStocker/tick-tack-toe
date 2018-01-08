var express = require("express");
var port = 8080;
var app = express();

app.use (express.static('./public'));

var server = app.listen(port, () => {
  console.log('Server Listening on Port', port)
});