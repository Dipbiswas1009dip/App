const express = require("express");
const data = require("./Data.json");
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("hello world!");
});

app.get("/api", (req, res) => {
    res.json(data);
});

app.listen(port, () => {
    console.log(`App listening on port number ${port}`);
}).on('error', (err) => {
    console.error('Failed to start server:', err);
});
