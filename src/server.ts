///<refrence path='/routes/exampleRouter' />
import express = require('express');
import * as Example from './routes/exampleRouter'

module app.core {
    /**
     * Server
     */
    export class Server {
        constructor(private app: express.Application, private port: number) {
            
        }

        // Middlewear
        private configureMiddleware(app: express.Application): void {
            //app.use();
        }

        // Routes
        private configureRoutes(app: express.Application): void {
            app.use("/example", app.routes.Example.Index);
        }

        public run(): void {
            this.app.listen(this.port, () => {
                console.log(`Server running on port :${this.port}.`);
            });
        }
    }
}