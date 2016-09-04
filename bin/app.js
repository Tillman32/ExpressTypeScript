"use strict";
var express = require('express');
var service_1 = require('./services/service');
var service = new service_1.Service({ app: express(), port: 3000 });
service.Run();
//# sourceMappingURL=app.js.map