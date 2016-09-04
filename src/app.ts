/// <reference path="../typings/index.d.ts" />
import express = require('express');
import dotenv = require('dotenv');
import {Service} from './services/service';

dotenv.load({path: '.env.example'});

var service = new Service({app: express(), port: process.env.SERVICE_PORT});
service.Run();