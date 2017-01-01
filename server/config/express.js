"use strict";

const express = require("express"),
    path = require("path"),
    bodyParser = require("body-parser"),
    cookieParser = require("cookie-parser");

module.exports = (config, app) => {
    // here load other routs
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    let secretKey = process.env["SECRET_KEY"] || config.development.secret;

    app.use(express.static(path.normalize(config.path.rootPath, '/')));
    console.log(path.normalize(__dirname, '/../'));
    console.log(config.path.rootPath);
};