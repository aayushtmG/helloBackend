require("dotenv").config()
const express = require("express")
const app = express()

const port = process.env.PORT

app.get("/", (req, res) => {
  res.send("Home page")
})
app.get("/login", (req, res) => {
  res.send("Login page")
})
app.get("/info", (req, res) => {
  res.json({
    Name: "Aayush Tamang",
    Age: "22",
    Address: "Bharatpur",
  })
})

app.listen(port, () => {
  console.log("Listening to port:", port)
})
