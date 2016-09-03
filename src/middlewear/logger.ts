import express = require('express');

export class Logger {
    public static LogRequest(request: express.Request, response: express.Response, next: express.NextFunction) {
        console.log(new Date(), request.method, request.url, response.statusCode);
        next();
    }
}