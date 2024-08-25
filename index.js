const express = require("express")
const data = require("./Data.json")

const app = express()
const PORT = 3000;

app.get("/", (req, res) => {
    res.send("hello world!")
})

app.get("/api", (req, res) => {
    res.json(data)
})

app.listen(PORT, () => {
    console.log(`app lisning is port number ${PORT}`)
})
