const express = require('express');

const fingertPrintRouter = express.Router();

fingertPrintRouter.get("/", (req, res)=>{
    res.send(req.fingerprint);
})

module.exports = fingertPrintRouter
