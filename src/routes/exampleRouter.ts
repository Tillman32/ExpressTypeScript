import express = require('express');

export module app.routes {
    export class Example {
        public index(request: express.Request, response: express.Response, next: express.NextFunction) {
            response.send("Ok");
        }
    }
}