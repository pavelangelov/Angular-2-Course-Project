"use strict";

const express = require("express"),
    config = require("../config/constants");

const app = express();

let data = require("../data-services");
require("../config/database")(config);
require("../config/express")(config, app);
require("../config/routes")(app, data);

module.exports = app;