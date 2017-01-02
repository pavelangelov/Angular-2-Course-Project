"use strict";

const users = require("./user-service"),
    messages = require("./message-service"),
    posts = require("./post-service");

module.exports = {
    users,
    messages,
    posts
};