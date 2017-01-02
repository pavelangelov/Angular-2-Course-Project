"use strict";

const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

module.exports = (config) => {
    mongoose.connect(config.development.db);

    let db = mongoose.connection;

    db.once("open", err => {
        if (err) {
            console.log(err);
        }

        console.log("MongoDB ready!");
    });

    db.on("error", err => {
        console.log(`Database error: ${err}`);
    });
};