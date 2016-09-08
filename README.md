#ExpressTypeScript#

This project is a starting point for writing Express applications using TypeScript in a class based, strongly typed manner. 

## Installation ##

 1. ```git clone https://github.com/Tillman32/ExpressTypeScript.git .```
 2. ```cd ExpressTypeScript && npm install```
 3. ```npm start```

## Typings (optional) ##
Typings are required to develop against the TypeScript codebase. Please use the below commands to install the required typings.

 1. Install nodemon globally (if not already installed): ```npm run preinstall```
 2. ```typings install dt~node --global```
 3. ```typings install dt~express serve-static express-serve-static-core --global```
 4. ```typings install dt~dotenv --global --save```
 5. ```typings install dt~core-js --global --save```
 6. ```npm run dev```

## Examples ##

### Adding a new route
To add a new route, simply create a new TypeScript class inside the ```routes/``` directory, like so:
```TypeScript
import express = require('express');
export class NewRoute {
    public static Index(request: express.Request, response: express.Response) {
        response.send("Hello Route!");
    }
}
```
You'll also need to tell the express service about the new route. Open ```services/service.ts``` and register the route inside the ```ConfigureRoutes``` method. Also, don't forget to import the class at the top:
```TypeScript
import {Index} from '../routess/newRoute';

""" Code removed for brevity """

// Routes
private ConfigureRoutes(app: express.Application): void {
    // Define routes
    app.get('/', Home.Index)

    // Adding my awesome new route here
    app.get('/NewRoute', NewRoute.Index)

    // 500 Error
    app.get('/500', StatusCode.ServerError)

    // 404 Route, always keep this last
    app.get('/*', StatusCode.NotFound)
}
```
Thats it!

----------


The MIT License (MIT)
Copyright (c) 2016

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.