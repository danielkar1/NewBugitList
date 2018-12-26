const express = require("express")
const request = require('request');

const Insect = require("../models/insect")
const Observation = require("../models/observation")
const router = express.Router()

request("some url", function (err, res) {
    console.log("@server.js: Got data from external API \n")


});

router.get("/sanity", function (req, res) {
    res.send("OK")
    console.log("sanity check OK")
});

router.get("/insects/", function (req, response) {
    // This will send ALL of the insects to the client
});

router.get("/observations/", function (req, response) {
    // This will send ALL of the observations to the client
});

module.exports = router