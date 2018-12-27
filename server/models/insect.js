const mongoose = require('mongoose')
const Schema = mongoose.Schema


//Insect Schema: - common name might  be array of strings
const insectSchema = new Schema({

    commonName: String,
    latinName: String,
    season: String,
    simpleLocation: [String],
    dayOrNight: String,
    commonality: Number,
    picture: String,
    observations: [{
        type: Schema.Types.ObjectId,
        ref: 'Observation'
    }]
})
//Observation Schema
//  location discuss the type for coordinates & spotted locations
const observationSchema = new Schema({
    insect: {
        type: Schema.Types.ObjectId,
        ref: 'Insect'
    },
    longt: Number,
    lat: Number,
    spottedLocation: String,
    date: String,
    obspicture: String,
    exist: Boolean
    //   add to new version
})

//Insects & Observation  models:
const Insect = mongoose.model("Insect", insectSchema)
const Observation = mongoose.model("Observation", observationSchema)


//  CRUD For Routes
//  Find all insects with populatated observations
/* Insect.find({})
    .populate("observations")
    .exec(function (err, insects) {
        console.log(insects)
    })
 */
//  Find all ovservations with populated insects
/* Observation.find({})
    .populate("insect")
    .exec(function (err, observations) {
        console.log(observations)
    })
 */




module.exports = {
    insect: Insect,
    observation: Observation
}

/* let insect1 = new Insect({

    commonName: "Crimson-speckled flunkey",
    latinName: "Utetheisa pulchella",
    season: "spring",
    simpleLocation: ["center", "negev", "galil", "golan", "sharon"],
    dayOrNight: "day",
    commonality: 4,
    picture: "https://static.inaturalist.org/photos/231337/medium.jpg?1545505057",
    observations: []


})

let insect2 = new Insect({
    commonName: "Copper Chafer",
    latinName: "Protaetia cuprea",
    season: "spring",
    simpleLocation: ["galil"],
    dayOrNight: "day",
    commonality: 1,
    picture: "https://static.inaturalist.org/photos/29098031/medium.jpeg?1544621612",
    observations: []
})


let insect3 = new Insect({
    commonName: "Oxythyrea noemi",
    latinName: "Oxythyrea noemi",
    season: "spring",
    simpleLocation: ["galil", "center", "golan", "negev", "sharon"],
    dayOrNight: "day",
    commonality: 5,
    picture: "https://static.inaturalist.org/photos/19030114/medium.jpg?1528002082",
    observations: []
})


let insect4 = new Insect({
    commonName: "Firefly",
    latinName: "Lampyris nervosa",
    season: "winter",
    simpleLocation: ["negev"],
    dayOrNight: "night",
    commonality: 1,
    picture: "https://static.inaturalist.org/photos/29515028/medium.jpeg?1545758166",
    observations: []
})

let insect5 = new Insect({
    commonName: "Violet Dropwing",
    latinName: "Trithemis annulata",
    season: "autumn",
    simpleLocation: ["negev"],
    dayOrNight: "day",
    commonality: 1,
    picture: "https://static.inaturalist.org/photos/29199138/medium.jpg?1544915642",
    observations: []
})

let observation1 = new Observation({
    insect: insect5,
    longt: 34.793991,
    lat: 31.243870,
    spottedLocation: "negev",
    date: "2018-01-01",
    obspicture: " ",
    exist: true


})

let observation2 = new Observation({
    insect: insect4,
    longt: 34.793991,
    lat: 31.243870,
    spottedLocation: "negev",
    date: "2018-09-01",
    obspicture: " ",
    exist: true



})

let observation3 = new Observation({
    insect: insect3,
    longt: 34.781769,
    lat: 32.085300,
    spottedLocation: "negev",
    date: "2018-06-05",
    obspicture: " ",
    exist: true



})

let observation4 = new Observation({
    insect: insect3,
    longt: -86.127070,
    lat: 39.978390,
    spottedLocation: "galil",
    date: "2018-07-05",
    obspicture: " ",
    exist: true



})

let observation5 = new Observation({
    insect: insect3,
    longt: 34.793991,
    lat: 31.243870,
    spottedLocation: "negev",
    date: "2018-07-05",
    obspicture: " ",
    exist: true



})

let observation6 = new Observation({
    insect: insect2,
    longt: -86.127070,
    lat: 39.978390,
    spottedLocation: "galil",
    date: "2018-04-24",
    obspicture: " ",
    exist: true



})


let observation7 = new Observation({
    insect: insect1,
    longt: 35.660570,
    lat: 33.164350,
    spottedLocation: "golan",
    date: "2018-04-30",
    obspicture: " ",
    exist: true



})
let observation8 = new Observation({
    insect: insect1,
    longt: 35.660570,
    lat: 33.164350,
    spottedLocation: "golan",
    date: "2018-05-15",
    obspicture: " ",
    exist: true



}) */

// insect1.observations.push(observation8)
// insect1.observations.push(observation7)
// insect2.observations.push(observation6)
// insect3.observations.push(observation5)
// insect3.observations.push(observation4)
// insect3.observations.push(observation3)
// insect4.observations.push(observation2)
// insect5.observations.push(observation1)


// let allinsects = [insect1, insect2, insect3, insect4, insect5]

// allinsects.forEach(s => s.save())

// let allobs = [observation8, observation7, observation6, observation5, observation4, observation3, observation2, observation1]

// allobs.forEach(s => s.save())