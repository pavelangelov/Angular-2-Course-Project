"use strict";

const mongoose = require("mongoose"),
    Schema = mongoose.Schema;

let messageSchema = new Schema({
    author: {
        type: String,
        required: true
    },
    authorId: {
        type: String,
        required: true
    },
    targetUser: {
        type: String,
        required: true
    },
    targetUserId: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    postDate: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    }
});

mongoose.model("Message", messageSchema);
let Message = mongoose.model("Message");
module.exports = Message;