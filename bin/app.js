"use strict";
var express = require('express');
var server_1 = require('./server');
var app = express();
var server = new server_1.Server(app, 3000);
server.Run();
//# sourceMappingURL=app.js.map