"use strict";
var logger_1 = require('../middlewear/logger');
var homeRoute_1 = require('../routes/homeRoute');
var Service = (function () {
    function Service(expressApp) {
        this._App = expressApp.app;
        this._Port = expressApp.port;
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
        this._App.listen(this._Port, function () {
            console.log("Server running on port :" + _this._Port + ".");
        });
    };
    return Service;
}());
exports.Service = Service;
//# sourceMappingURL=service.js.map