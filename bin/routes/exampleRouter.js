"use strict";
function Index(request, response, next) {
    response.send("Ok - from index");
    next();
}
exports.Index = Index;
//# sourceMappingURL=exampleRouter.js.map