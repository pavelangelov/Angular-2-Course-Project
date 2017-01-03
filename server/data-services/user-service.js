"use strict";

let User = require("./models").User,
    fakeDb = require("./fakeDatas"),
    defaultUserImage = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSgOuWYgW80emzlSY5lFG5wa9EeyuCO7p8I37N-O8tglniEVs1eE1SxJI";

module.exports = {
    createUser(user) {
        // validator.validateUsername(user.username);
        // validator.validatePassword(user.password);

        let newUser = new User({
            username: user.username,
            firstname: user.firstname,
            lastname: user.lastname,
            fullname: `${user.firstname} ${user.lastname}`,
            password: user.password,
            authKey: user.authKey,
            profileImage: defaultUserImage,
            images: [],
            isOnline: false,
            unreadMessages: 0,
            requests: [],
            friends: []
        });
        return new Promise((resolve, reject) => {
            newUser.save((err, dbUser) => {
                if (err) {
                    return reject(err);
                }
                return resolve(dbUser);
            });
        });
    },
    login(username, password) {
        return new Promise((resolve, reject) => {
            User.findOneAndUpdate(
                { "username": username, "password": password},
                { "isOnline": true},
                { save: true },
                (err, user) => {
                    if (err) {
                        return reject(err);
                    } else if (!user) {
                        return reject({ message:"Incorect username or password!" });
                    }

                    return resolve(user);
                }
            )
        })
    },
    logout(username) {
        return new Promise((resolve, reject) => {
            User.findOneAndUpdate(
                { "username": username },
                { "isOnline": false},
                { save: true},
                (err, data) => {
                    if (err) {
                        return reject(err);
                    }

                    return resolve(data || null);
                }
            )
        })
    },
    updateUser(user, firstName, lastName, userInfo) {
        firstName = firstName || user.firstname;
        lastName = lastName || user.lastname;
        userInfo = userInfo || user.userInfo;

        // validator.validateName(firstName);
        // validator.validateName(lastName);

        return new Promise((resolve, reject) => {
            User.findOneAndUpdate(
                { "_id": user._id }, 
                { "firstname": firstName, 
                    "lastname": lastName, 
                    "userInfo": userInfo 
                }, 
                { save: true },
                (err, user1) => {
                    if (err) {
                        return reject(err);
                    }
                    return resolve(user1);
                });
        });
    },
    addImage(userId, imgUrl) {
        return new Promise((resolve, reject) => {
            User.findOneAndUpdate(
                { "_id": userId},
                { $push: { "images": imgUrl } },
                { save: true },
                (err, data) => {
                    if (err) {
                        return reject(err);
                    }

                    return resolve(data || null);
                }
            )
        })
    },
    setProfileImage(userId, imgUrl) {
        return new Promise((resolve, reject) => {
            User.findOneAndUpdate(
                { "_id": userId },
                { "profileImage": imgUrl},
                (err, user) => {
                    if (err) {
                        return reject(err);
                    }

                    return resolve(user || null);
                }
            )
        })
    },
    sendRequest(username, request) {
        return new Promise((resolve, reject) => {
            User.findOneAndUpdate(
                { "username": username,
                    "requests.requestUser": { $ne: request['requestUser'] }}, 
                { $addToSet: { "requests": request } },
                { save: true },
                (err, dbReq) => {
                    if (err) {
                        return reject(err);
                    }
                    return resolve(dbReq);
                });
        });
    },
    addFriend(username, friend) {
        return new Promise((resolve, reject) => {
            User.findOneAndUpdate(
                { "username": username }, 
                { $push: { "friends": friend } },
                { save: true },
                (err, user) => {
                    if (err) {
                        return reject(err);
                    }

                    return resolve(user);
                }
            );
        });
    },
    removeRequest(username, requestId) {
        return new Promise((resolve, reject) => {
            User.findOneAndUpdate(
                { "username": username }, 
                { $pull: { "requests": { "_id": requestId } } }, 
                { safe: true },
                (err, user) => {
                    if (err) {
                        return reject(err);
                    }

                    return resolve(user);
                });
        });
    },
    getUsersByUsername(username) {
        return new Promise((resolve, reject) => {
            User.find(
                { "username": { "$regex": username, "$options": "i" } },
                (err, data) => {
                    if (err) {
                        return reject(err);
                    }

                    return resolve(data);
                }
            )
        });
    },
    getUserById(id) {
        return new Promise((resolve, reject) => {
            User.findOne({ "_id": id }, (err, user) => {
                if (err) {
                    return reject(err);
                }

                return resolve(user);
            });
        });
    },
    getUserByUsername(username) {
        return new Promise((resolve, reject) => {
            User.findOne({ "username": username }, (err, user) => {
                if (err) {
                    return reject(err);
                }

                return resolve(user);
            });
        });
    },
    addUnreadMessage(userId) {
        return new Promise((resolve, reject) => {
            User.findOneAndUpdate(
                { "_id": userId },
                { $inc: { "unreadMessages": 1 } },
                { save: true },
                (err, user) => {
                    if (err) {
                        return reject(err);
                    }

                    return resolve(user);
                }
            );
        });
    },
    restoreMessagesCount(userId) {
        return new Promise((resolve, reject) => {
            User.findOneAndUpdate(
                { "_id": userId },
                { "unreadMessages": 0 },
                { save: true },
                (err, user) => {
                    if (err) {
                        return reject(err);
                    }

                    return resolve(user);
                }
            );
        });
    }
};