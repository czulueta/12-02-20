const express = require("express")
const app = express()

app.get("/", (req, res) => {
    res.send("Shalawam Ahch Praise the Most High!!!")
})

app.listen(8999, () => {
    console.log("The server is running on 8999!!!")
})