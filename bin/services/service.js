"use strict";
var logger_1 = require('../middleware/logger');
var statusCode_1 = require('../routes/statusCode');
var homeRoute_1 = require('../routes/homeRoute');
var Service = (function () {
    function Service(express) {
        this._App = express.app;
        this._Port = express.port;
        this.ConfigureMiddleware(this._App);
        this.ConfigureRoutes(this._App);
    }
    Service.prototype.ConfigureMiddleware = function (app) {
        app.use(logger_1.Logger.LogRequest);
    };
    Service.prototype.ConfigureRoutes = function (app) {
        app.get('/', homeRoute_1.Home.Index);
        app.get('/500', statusCode_1.StatusCode.ServerError);
        app.get('/*', statusCode_1.StatusCode.NotFound);
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