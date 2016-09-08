/// <reference path="../typings/index.d.ts" />
import express = require('express');
import {Service} from './services/service';

var service = new Service({app: express(), port: process.env.SERVICE_PORT});
service.Run();