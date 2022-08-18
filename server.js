const express = require("express");
const app = express();
const port = 3000; 
const users = require("./routes/user.js")


let fruits = [
    {
        name: "Apple", 
        color: "Red",
    }, 
    {
        name: "Banana", 
        color: "Yellow", 
    }, 
    {
        name: "Kiwi", 
        color: "Green", 
    }, 
    {
        name: "Grape", 
        color: "Purple"
    }
]

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})