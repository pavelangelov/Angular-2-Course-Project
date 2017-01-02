"use strict";

module.exports = (router, data) => {
    router.post("/login", (req, res) => {
            let username = req.body.username,
                password = req.body.password;
            // TODO: create real validation
            if (password.length < 40) {
                res.send({ error: 'Invalid password length!' });
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
                .catch(err => res.send({ error: err.message }));
        })
        .post("/logout", (req, res) => {

            data.users.logout(req.body.username)
                .then(data => {
                    res.send({ success: true })
                })
                .catch(err => res.send({ error: err.message }));
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
        .get('/users/:username', (req, res) => {
            let username = req.params.username;

            console.log(username);

            // data.users.getUserByUsername(username)
            //     .then(otherUser => {
            //         if (user.friends.some(x => x._id.toString() === otherUser._id.toString())) {
            //             otherUser.isFriend = true;
            //         }
            //         let isSelf = user.username === otherUser.username;
            //         res.render("users/users-profile", { user, pageOwner: otherUser, isSelf });
            //     })
            //     .catch(err => res.json(err));
        })
}