///<refrence path='/routes/homeRoute' />
import express = require('express');
import {Logger} from './middlewear/logger'
import {Home} from './routes/homeRoute';

export class Server {

    private _App: express.Application;
    private _Port: number

    constructor(private app: express.Application, private port: number) {
        this._App = app;
        this._Port = port;

        // Configue Middlewear
        this.ConfigureMiddleware(this._App);
        // Configure Routes
        this.ConfigureRoutes(this._App);
    }

    // Middlewear
    private ConfigureMiddleware(app: express.Application): void {
        app.use(Logger.LogRequest);
    }

    // Routes
    private ConfigureRoutes(app: express.Application): void {
        // Define routes
        app.use('/', Home.Index)
    }

    public Run(): void {
        this.app.listen(this.port, () => {
            console.log(`Server running on port :${this._Port}.`);
        });
    }
}
