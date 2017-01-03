"use strict";

module.exports = (router, data) => {
    router.post("/login", (req, res) => {
        let username = req.body.username,
            password = req.body.password;
        // TODO: create real validation
        if (password.length < 40) {
            res.send({error: 'Invalid password length!'});
            return;
        }

        // TODO: update this with info for current user
        data.users.login(username, password)
            .then(user => {
                res.send({
                    success: true,
                    username: user.username,
                    image: user.profileImage,
                    authKey: user.authKey,
                    requests: user.requests
                })
            })
            .catch(err => res.send({error: err.message}));
    })
    .post("/logout", (req, res) => {
        data.users.logout(req.body.username)
            .then(data => {
                res.send({ success: true})
            })
            .catch(err => res.send({ error: err.message}));
    })
    .post("/register", (req, res) => {
        let user = {
            username: req.body.username,
            password: req.body.password,
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            authKey: 'authKey', // TODO: Update this with real auth-key
        }
        // TODO: validate data before send to database
        data.users.createUser(user)
            .then(user => {
                res.send({ success: true });
            })
            .catch(err => res.send({ error: err.message }));
    })
    .get("/users/:username", (req, res) => {
        let username = req.params.username;

        data.users.getUsersByUsername(username)
            .then(data => res.send({ success: true, result: data }))
            .catch(err => res.send({ error: err.message }));
    })
    .get("/user/:username", (req, res) => {
        let username = req.params.username;

        data.users.getUserByUsername(username)
            .then(data => res.send({ success: true, result: data }))
            .catch(err => res.send({ error: err.message }));
    })
    .post('/user/send-request', (req, res) => {
        let username = req.body.reciever,
            request = req.body.request;
        
        data.users.sendRequest(username, request)
            .then(data => {
                if (!data) {
                    res.send({ message: "This user already has request from you!"});
                } else {
                    res.send({ success: true});
                }
            })
            .catch(err => res.send(err.message));
    })
    .post("/user/confirm-request", (req, res) => {
        let firstUser = req.body.firstUser,
            secondUser = req.body.secondUser,
            requestId = req.body.requestId;
        
        Promise.all([data.users.addFriend(firstUser.username, secondUser),
                    data.users.addFriend(secondUser.username, firstUser),
                    data.users.removeRequest(firstUser.username, requestId)])
                .then(([first, second, dbUser]) => {
                    if (!dbUser) {
                        res.send({});
                        return;
                    }
                    
                    res.send({success: true, result: dbUser});
                })
                .catch(err => res.send({error: err.message}));
    });
}