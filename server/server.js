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
})

app.use("/api", router);

app.use(express.static(path.normalize(__dirname, '/')));


let port = process.env.PORT || 4001;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})