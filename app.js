var express = require("express")
var port = 8080;

express.use (express.static('./public'))

var server = express.listen(port, () => {
  console.log('Server Listening on Port', port)
})