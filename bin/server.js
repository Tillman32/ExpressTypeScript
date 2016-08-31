"use strict";
var app;
(function (app_1) {
    var core;
    (function (core) {
        var Server = (function () {
            function Server(app, port) {
                this.app = app;
                this.port = port;
            }
            Server.prototype.configureMiddleware = function (app) {
            };
            Server.prototype.configureRoutes = function (app) {
                app.use("/example", app.routes.Example.Index);
            };
            Server.prototype.run = function () {
                var _this = this;
                this.app.listen(this.port, function () {
                    console.log("Server running on port :" + _this.port + ".");
                });
            };
            return Server;
        }());
        core.Server = Server;
    })(core = app_1.core || (app_1.core = {}));
})(app || (app = {}));
//# sourceMappingURL=server.js.map