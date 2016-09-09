"use strict";
var express = require('express');
var config_1 = require('./config');
var service_1 = require('./services/service');
var service = new service_1.Service({ app: express(), port: config_1.Config.Port });
service.Run();
//# sourceMappingURL=app.js.map