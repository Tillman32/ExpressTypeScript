"use strict";
var exampleRouter_1 = require('./routes/exampleRouter');
var Server = (function () {
    function Server(app, port) {
        this.app = app;
        this.port = port;
        this._App = app;
        this._Port = port;
        this.configureRoutes(this._App);
    }
    Server.prototype.configureMiddleware = function (app) {
    };
    Server.prototype.configureRoutes = function (app) {
        app.use('/', exampleRouter_1.Index);
    };
    Server.prototype.run = function () {
        var _this = this;
        this.app.listen(this.port, function () {
            console.log("Server running on port :" + _this._Port + ".");
        });
    };
    return Server;
}());
exports.Server = Server;
//# sourceMappingURL=server.js.map