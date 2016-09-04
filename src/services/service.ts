import express = require('express');
import {IExpressApp} from './iExpressApp';
import {Logger} from '../middlewear/logger';
import {StatusCode} from '../routes/statusCode'
import {Home} from '../routes/homeRoute';

export class Service {

    _App: express.Application;
    _Port: number

    constructor(express: IExpressApp) {
        this._App = express.app;
        this._Port = express.port;

        // Configue Middlewear
        this.ConfigureMiddleware(this._App);
        // Configure Routes
        this.ConfigureRoutes(this._App);
    }

    // Middleware
    private ConfigureMiddleware(app: express.Application): void {
        app.use(Logger.LogRequest);
    }

    // Routes
    private ConfigureRoutes(app: express.Application): void {
        // Define routes
        app.get('/', Home.Index)

        // 500 Error
        app.get('/500', StatusCode.ServerError)

        // 404 Route, always keep this last
        app.get('/*', StatusCode.NotFound)
    }

    public Run(): void {
        this._App.listen(this._Port, () => {
            console.log(`Server running on port :${this._Port}.`);
        });
    }
}
