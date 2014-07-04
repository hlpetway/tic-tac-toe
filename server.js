'use strict';

var express = require('express');
var app = express();

var server = https.createServer(options, app);
server.listen(process.env.PORT || 3000, function() {
  console.log('server running on port: ' + process.env.PORT || 3000);
});

