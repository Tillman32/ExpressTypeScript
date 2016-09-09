/// <reference path="../typings/index.d.ts" />
import express = require('express');
import {Config} from './config'
import {Service} from './services/service';

var service = new Service({app: express(), port: Config.Port});
service.Run();