const express = require('express')
const Model = require("../models/insect")
const Observation = Model.observation
const Insect = Model.insect
const router = express.Router()
router.get("/sanity", function (req, res) {
    res.send("OK")
    console.log("sanity check OK")
});
router.get("/insects/:insectName", function (req, res) {
    let insectName = req.params.insectName
    Insect.find({
            commonName: `${insectName}`
        })
        .populate("observations")
        .exec(function (err, insect) {
            res.send(insect)
        })
});
router.get("/insects", function (req, res) {
    Insect.find({})
        .populate("observations")
        .exec(function (err, results) {
            res.send(results)
        })
})
// router.get("/observations/:insectName", function (req, res) {
// let insectName = req.params.insectName
// });
module.exports = router