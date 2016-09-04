"use strict";
var express = require('express');
var dotenv = require('dotenv');
var service_1 = require('./services/service');
dotenv.load({ path: '.env.example' });
var service = new service_1.Service({ app: express(), port: process.env.SERVICE_PORT });
service.Run();
//# sourceMappingURL=app.js.map