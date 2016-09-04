"use strict";
var logger_1 = require('./middlewear/logger');
var homeRoute_1 = require('./routes/homeRoute');
var Service = (function () {
    function Service(app, port) {
        this._App = app;
        this._Port = port;
        this.ConfigureMiddleware(this._App);
        this.ConfigureRoutes(this._App);
    }
    Service.prototype.ConfigureMiddleware = function (app) {
        app.use(logger_1.Logger.LogRequest);
    };
    Service.prototype.ConfigureRoutes = function (app) {
        app.use('/', homeRoute_1.Home.Index);
    };
    Service.prototype.Run = function () {
        var _this = this;
        this.app.listen(this.port, function () {
            console.log("Server running on port :" + _this._Port + ".");
        });
    };
    return Service;
}());
exports.Service = Service;
//# sourceMappingURL=server.js.map