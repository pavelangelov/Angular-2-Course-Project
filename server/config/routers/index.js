'use strict'
const router = require("express").Router();

module.exports = (app, data) => {
    require("./messages-router")(router, data);
    require("./users-router")(router, data);
    require("./posts-router")(router, data);
    
    app.use("/api", router);
}