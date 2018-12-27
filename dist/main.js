
let manger = new TempManager ()
const renderer = new Renderer()
const bugManager = new TempManager(renderer)

bugManager.getDataFromDB();


const bugNameQuery = async function() {
    let bugNameInput = $("#name-input").val()
    bugManager.getBugByName(bugNameInput)
}

const seasonQuery = async function() {
    let seasonInput = $("#season-input").val()
    bugManager.getBugBySeason(seasonInput)
}

const locationQuery = async function() {
    let locationInput = $("#location-input").val()
    bugManager.getBugByLocation(locationInput)
}



$("body").on("click","#postobservation",function(){
    let name=$('#name').val()
    let location=$('#location').val()
    let date=$('#date').val()
    let reportObject = {
        commonName: name,
        spotteLocation: location,
        date: date
    }
    console.log(reportObject)
    manger.saveReport(reportObject)
    // setTimeout( function(){window.location.href = "index.html"},5000)
   
    // window.location.href = "http://localhost:8082/";


})



