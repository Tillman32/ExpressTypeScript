"use strict";
var Logger = (function () {
    function Logger() {
    }
    Logger.LogRequest = function (request, response, next) {
        console.log(new Date(), request.method, request.url, response.statusCode);
        next();
    };
    return Logger;
}());
exports.Logger = Logger;
//# sourceMappingURL=logger.js.map