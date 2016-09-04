/// <reference path="../typings/index.d.ts" />
import express = require('express');
import {Service} from './services/service';

var service = new Service({app: express(), port: 3000});
service.Run();