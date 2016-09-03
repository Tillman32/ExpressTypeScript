import express = require('express');

export class Home {
    // Home Route
    public static Index(request: express.Request, response: express.Response, next: express.NextFunction) {
        // Do Stuff
        response.send("Ok");
        next();
    }
}
