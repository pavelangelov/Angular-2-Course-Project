"use strict";

let requiredValidationMessage = "{PATH} is required";
const mongoose = require("mongoose"),
    Schema = mongoose.Schema;
let User;

let userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    authKey: {
        type: String,
        required: true
    },
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    fullname: { type: String },
    userInfo: { type: String },
    profileImage: { type: String },
    images: [String],
    isOnline: { type: Boolean},
    unreadMessages: { type: Number },
    requests: [
        {
            _id: {
                type: String,
                required: true
            },
            requestUser: {
                type: String,
                required: true
            },
            requestUserImage: {
                type: String,
                required: true
            }
        }
    ],
    friends: [
        {
            username: {
                type: String,
                required: true
            },
            image: {
                type: String,
                required: true
            }
        }
    ]
});

userSchema.pre("save", true, function (next, done) {
    let self = this;
    mongoose.models["User"].findOne({ username: self.username }, function (err, user) {
        if (err) {
            done(err);
        } else if (user) {
            self.invalidate("username", "User already exist!");
            done(new Error("User already exist!"));
        } else {
            done();
        }
    });
    next();
});

mongoose.model("User", userSchema);
User = mongoose.model("User");
module.exports = User;