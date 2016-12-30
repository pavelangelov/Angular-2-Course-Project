'use strict';

const express = require("express"),
    path = require("path"),
    bodyParser = require("body-parser"),
    cookieParser = require("cookie-parser"),
    router = express.Router();

let app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

router.get("/test", (req, res) => {
    res.send({message: "Test works!"});
});

router.post("/login", (req, res) => {
    console.log(req.body);
    let user = {
        "auth_key": "Authentication key",
        "username_key": req.body.username,
        "image_key": "https://pp.vk.me/c629327/v629327473/db66/r051joYFRX0.jpg",
        "success": true
    }

    // TODO: update this with info for current user
    res.status(200).send(user);
})

app.use("/api", router);

app.use(express.static(path.normalize(__dirname, '/')));


let port = process.env.PORT || 4001;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})