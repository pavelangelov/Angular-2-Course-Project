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
    data.users.login(username, password)
        .then(user => {
            res.send({
                success: true,
                username: user.username,
                image: user.profileImage,
                authKey: user.authKey
            })
        })
        .catch(err => res.send({error: err.message}));
});

router.post("/logout", (req, res) => {
    data.users.logout(req.body.username)
        .then(data => {
            res.send({ success: true})
            .catch(err => res.send({ error: err.message}));
        })
});

router.post("/register", (req, res) => {
    // TODO: update this with storing user in database
    
    // if (req.body.username.length > 2) {
    //     res.send({success: true});
    // } else {
    //     res.send({error: "Invalid registration parameters!"});
    // }

    let user = {
        username: req.body.username,
        password: req.body.password,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        authKey: 'authKey', // TODO: Update this with real auth-key
    }
    data.users.createUser(user)
        .then(user => {
            res.send({ success: true });
        })
        .catch(err => res.send({ error: err.message }));
});
    
    app.use("/api", router);
};