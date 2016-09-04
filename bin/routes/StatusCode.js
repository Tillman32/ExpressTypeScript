"use strict";
var StatusCode = (function () {
    function StatusCode() {
    }
    StatusCode.NotFound = function (request, response, next) {
        response.status(404).send('Not Found');
    };
    StatusCode.ServerError = function (request, response, next) {
        response.status(500).send('Server Error');
    };
    return StatusCode;
}());
exports.StatusCode = StatusCode;
//# sourceMappingURL=statusCode.js.map