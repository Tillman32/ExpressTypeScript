import express = require('express');

export function Index(request: express.Request, response: express.Response, next: express.NextFunction) {
    response.send("Ok - from index");
    next();
}