"use strict";
var Home = (function () {
    function Home() {
    }
    Home.Index = function (request, response) {
        response.send("Ok");
    };
    return Home;
}());
exports.Home = Home;
//# sourceMappingURL=homeRoute.js.map