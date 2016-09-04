import express = require('express');

export class StatusCode {
    // 404
    public static NotFound(request: express.Request, response: express.Response, next: express.NextFunction) {
        response.status(404).send('Not Found');
    }
    // 500
    public static ServerError(request: express.Request, response: express.Response, next: express.NextFunction) {
        response.status(500).send('Server Error');
    }
}
