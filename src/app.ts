import express = require('express');

module app {
    let app = express();

    app.use('/', (req, res) => {
        res.send("Ok");
    })


    // Star the server
    app.listen(9000, () => {
        console.log("App running on port :9000");
    })
}