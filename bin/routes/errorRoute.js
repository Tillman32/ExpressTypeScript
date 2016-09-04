"use strict";
var StatusCode = (function () {
    function StatusCode() {
    }
    StatusCode.NotFound = function (request, response, next) {
        response.status(404).send('Not Found');
    };
    return StatusCode;
}());
exports.StatusCode = StatusCode;
//# sourceMappingURL=errorRoute.js.map