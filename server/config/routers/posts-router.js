"use strict";

module.exports = (router, data) => {
    router.get("/posts", (req, res) => {
        let username = req.headers["x-username"];
        data.posts.getPostsByUsername(username)
            .then(posts => {
                res.send({ success: true, result: posts });
            })
            .catch(err => res.send({ error: err.message }))
    })
    .post("/post", (req, res) => {
        data.posts.createPost(req.body)
            .then(data => {
                res.send({ success: true, post: data });
            })
            .catch(err => res.send({ error: err.message }));
    })
    .post("/post/increase-likes", (req, res) => {
        let username = req.body.username,
            postId = req.body.postId;
        data.posts.increaseLikes(postId, username)
            .then(data => {
                res.send({success: true, post: data});
            })
            .catch(err => res.send({error: err.message }));
    })
    .post("/post/decrease-likes", (req, res) => {
        let username = req.body.username,
            postId = req.body.postId;
        data.posts.decreaseLikes(postId, username)
            .then(data => {
                res.send({success: true, post: data});
            })
            .catch(err => res.send({error: err.message }));
    });
}