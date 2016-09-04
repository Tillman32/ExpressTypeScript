import express = require('express');

export interface IExpressApp {
    app: express.Application,
    port: number 
}