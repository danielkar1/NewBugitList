const express = require('express')
const Model = require("../models/insect")
const Observation = Model.observation
const Insect = Model.insect
const router = express.Router()
const request = require('request')

const insectExist = async function (insectName) {
    const insect = await Insect.findOne({
        commonName: insectName
    })
    if (insect) {
        return true
    }
    return false
}

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

router.get("/insectseason/:insectseason", function (req, res) {
    let insectSeason = req.params.insectseason
    Insect.find({
            season: `${insectSeason}`
        })
        .populate("observations")
        .exec(function (err, results) {
            res.send(results)
        })
})
// Search insects by location
router.get("/insectslocation/:insectlocation", function (req, res) {
    let insectLoc = req.params.insectlocation
    Insect.find({
            simpleLocation: `${insectLoc}`
        })
        .populate("observations")
        .exec(function (err, results) {
            res.send(results)
        })
})
router.post("/saveObservation", async function (req, res) {
    let tempinsect =req.body
    console.log(tempinsect)
    let newInsect
    if (await insectExist(tempinsect.commonName)) {
        newInsect = await Insect.findOne({
            commonName: tempinsect.commonName
        })

        let observationOfExIns = new Observation({
            insect: newInsect,
            longt: 0,
            lat: 0,
            spottedLocation: tempinsect.spottedLocation,
            date: tempinsect.date,
            obspicture: " ",
            exist: true

        })
        newInsect.observations.push(observationOfExIns)
        newInsect.save()
        observationOfExIns.save()

        console.log(newInsect)
        res.send("Insect Exists obseravtions will be updated")
    } else {
        console.log("Insect does not exist")
        newInsect = new Insect({

            commonName: tempinsect.commonName,
            latinName: " ",
            season: " ",
            simpleLocation: [tempinsect.spottedLocation],
            dayOrNight: " ",
            commonality: 1,
            picture: " ",
            observations: []

        })
        let newObservation = new Observation({
            insect: newInsect,
            longt: 0,
            lat: 0,
            spottedLocation: tempinsect.spottedLocation,
            date: tempinsect.date,
            obspicture: " ",
            exist: true

        })

        newInsect.observations.push(newObservation)
        newInsect.save()
        newObservation.save()
        res.send("Data Saved")
       
    }


})

router.get('/bugobservations', function (req, res) {//calls to Extrnal, API by name
   
    request("https://api.inaturalist.org/v1/observations?taxon_name=insecta&iconic_taxa=Insecta&preferred_place_id=6815&order=desc&order_by=created_at", function (err, reso, body) {
        let data = JSON.parse(body)
        console.log(data)
        res.send(data)
    });
   
})

// router.get("/observations/:insectName", function (req, res) {
// let insectName = req.params.insectName
// });
module.exports = router