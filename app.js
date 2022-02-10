const express = require("express");
var app = express();
var bodyParser = require('body-parser');
var router = require('./routes');

app.use(bodyParser.urlencoded({
    extended: true,
}));
app.use(bodyParser.json());

//Models
// var models = require("./models");

//Sync Database
app.use('/api', router);
app.get("/", async (req, res) => res.send("server running"))
const PORT = process.env.PORT || 4000;
app.listen(PORT, async () => console.log(`Server started at port ${PORT}`))