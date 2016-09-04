"use strict";
var Home = (function () {
    function Home() {
    }
    Home.Index = function (request, response, next) {
        response.send("Ok");
        next();
    };
    return Home;
}());
exports.Home = Home;
//# sourceMappingURL=homeRoute.js.map