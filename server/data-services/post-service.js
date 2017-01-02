"use strict";

const Post = require("./models").Post;

module.exports = {
    createPost(postLikeObj) {
        let post = new Post({
            author: postLikeObj.author,
            targetUser: postLikeObj.targetUser,
            image: postLikeObj.image,
            postDate: postLikeObj.postDate,
            likes: 0,
            content: postLikeObj.content
        });

        return new Promise((resolve, reject) => {
            post.save((err, dbPost) => {
                if (err) {
                    return reject(err);
                }

                return resolve(dbPost);
            });
        });
    },
    getPostById(postId) {
        return new Promise((resolve, reject) => {
            Post.findOne({ "_id": postId }, (err, post) => {
                if (err) {
                    return reject(err);
                }

                return resolve(post);
            });
        });
    },
    getPostsByUsername(username) {
        return new Promise((resolve, reject) => {
            Post.find({ $or: [{ "author": username }, { "targetUser": username }] }, (err, posts) => {
                if (err) {
                    return reject(err);
                }
                return resolve(posts);
            });
        });
    },
    increaseLikes(postId, username) {
        return new Promise((resolve, reject) => {
            Post.findOneAndUpdate({ "_id": postId },
                {
                    $inc: { "likes": 1 },
                    $push: { "likesFrom": username },
                    $pull: { "dislikesFrom": username }
                },
                (err, post) => {
                    if (err) {
                        return reject(err);
                    }

                    return resolve(post);
                });
        });
    },
    decreaseLikes(postId, userId) {
        return new Promise((resolve, reject) => {
            Post.findOneAndUpdate({ "_id": postId },
                {
                    $inc: { "likes": -1 },
                    $push: { "dislikesFrom": userId },
                    $pull: { "likesFrom": userId }
                },
                (err, post) => {
                    if (err) {
                        return reject(err);
                    }

                    return resolve(post);
                });
        });
    }
};