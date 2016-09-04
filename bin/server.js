"use strict";
var logger_1 = require('./middlewear/logger');
var homeRoute_1 = require('./routes/homeRoute');
var Server = (function () {
    function Server(app, port) {
        this.app = app;
        this.port = port;
        this._App = app;
        this._Port = port;
        this.ConfigureMiddleware(this._App);
        this.ConfigureRoutes(this._App);
    }
    Server.prototype.ConfigureMiddleware = function (app) {
        app.use(logger_1.Logger.LogRequest);
    };
    Server.prototype.ConfigureRoutes = function (app) {
        app.use('/', homeRoute_1.Home.Index);
    };
    Server.prototype.Run = function () {
        var _this = this;
        this.app.listen(this.port, function () {
            console.log("Server running on port :" + _this._Port + ".");
        });
    };
    return Server;
}());
exports.Server = Server;
//# sourceMappingURL=server.js.map