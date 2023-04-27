const express = require("express");
const noteRoutes = express.Router();

noteRoutes.get("/", (req, res) => {
    res.send("");
});

noteRoutes.post("/", (req,res) => {
    res.send("");
})

module.exports = noteRoutes;