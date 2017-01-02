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
}