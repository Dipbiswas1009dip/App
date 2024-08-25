const express = require("express");
const data = require("./Data.json");
require('dotenv').config();

const app = express();
const port = process.env.PORT || 2000;

// অনুমোদিত আইপি ঠিকানার তালিকা
const allowedIPs = ["123.456.789.0", "987.654.321.0"]; // এখানে আপনার অনুমোদিত আইপি গুলো রাখুন

// আইপি যাচাই করার জন্য middleware
const checkIP = (req, res, next) => {
    const clientIP = req.ip; // রিকোয়েস্টের আইপি ঠিকানা নিন
    if (allowedIPs.includes(clientIP)) {
        next(); // আইপি অনুমোদিত হলে পরবর্তী middleware/fn এ যান
    } else {
        res.status(403).send("Access denied: Your IP is not allowed."); // আইপি অনুমোদিত না হলে ত্রুটি বার্তা দিন
    }
};

// middleware টি সবার আগে যোগ করুন
app.use(checkIP);

app.get("/", (req, res) => {
    res.send("hello world!");
});

app.get("/api", (req, res) => {
    res.json(data);
});

app.listen(port, () => {
    console.log(`App listening on port number ${port}`);
});
