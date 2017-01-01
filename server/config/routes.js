"use strict";

const router = require("express").Router();

module.exports = (app, data) => {
    router.get("/test", (req, res) => {
    res.send({message: "Test works!"});
});

router.post("/login", (req, res) => {
    let username = req.body.username,
        password = req.body.password;
    if (username.length < 3 || password.length < 3) {
        res.send({error: 'Username and password must have more tha 2 symbols!'});
        return;
    }

    // TODO: update this with info for current user
    let user = {
        "auth_key": "Authentication key",
        "username_key": username,
        "image_key": "https://pp.vk.me/c629327/v629327473/db66/r051joYFRX0.jpg",
        "success": true
    }

    res.status(200).send(user);
});

router.post("/register", (req, res) => {
    // TODO: update this with storing user in database
    if (req.body.username.length > 2) {
        res.send({success: true});
    } else {
        res.send({error: "Invalid registration parameters!"});
    }
});
    
    app.use("/api", router);
};