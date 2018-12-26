const express = require("express")
const router = express.Router()
const request = require('request');
const Insect = require("../models/insect")
const Observation = require("../models/insect")



router.get("/sanity", function (req, res) {
    res.send("OK")
    console.log("sanity check OK")    
});

router.get("/insects/:insectName", function (req, res) {
    let insectName = req.params.insectName
    res.send(insectName)
});

// router.get("/observations/:insectName", function (req, res) {
    // let insectName = req.params.insectName
// });

module.exports = router