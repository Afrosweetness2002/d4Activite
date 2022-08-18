const express = require("express");
const router= express.Router();


let users  = [
    {
        name: "User1", 
        age: 1,
    },
    {
        name: "User2", 
        age: 32
    }, 
    {
        name: "User3", 
        age: 15,
    }, 
    {
        name: "User4", 
        age: 26
    }
];



router.get("/", (req, res) => {
    res.sendStatus(200); 
});

module.exports = router