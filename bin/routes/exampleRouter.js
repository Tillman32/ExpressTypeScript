"use strict";
var app;
(function (app) {
    var routes;
    (function (routes) {
        var Example = (function () {
            function Example() {
            }
            Example.prototype.index = function (request, response, next) {
                response.send("Ok");
            };
            return Example;
        }());
        routes.Example = Example;
    })(routes = app.routes || (app.routes = {}));
})(app = exports.app || (exports.app = {}));
//# sourceMappingURL=exampleRouter.js.map