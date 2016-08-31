///<refrence path='/routes/exampleRouter' />
import express = require('express');
import {Index} from './routes/exampleRouter';

export class Server {

    private _App: express.Application;
    private _Port: number

    constructor(private app: express.Application, private port: number) {
        this._App = app;
        this._Port = port;

        // Configure routes
        this.configureRoutes(this._App);
    }

    // Middlewear
    private configureMiddleware(app: express.Application): void {
        //app.use();
    }

    // Routes
    private configureRoutes(app: express.Application): void {
        //app.use("/", Index);
        app.use('/', Index)
    }

    public run(): void {
        this.app.listen(this.port, () => {
            console.log(`Server running on port :${this._Port}.`);
        });
    }
}
