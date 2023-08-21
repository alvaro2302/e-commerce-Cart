const express = require('express');
const lineItems = require("../linesItems");
const router = express.Router();
router.get("/",(req,res) =>{
    res.header("Access-Control-Allow-Origin", "*");
    res.json(lineItems);
})
module.exports = router;