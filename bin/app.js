"use strict";
var express = require('express');
var app;
(function (app_1) {
    var app = express();
    app.use('/', function (req, res) {
        res.send("Ok");
    });
    app.listen(9000, function () {
        console.log("App running on port :9000");
    });
})(app || (app = {}));
//# sourceMappingURL=app.js.map