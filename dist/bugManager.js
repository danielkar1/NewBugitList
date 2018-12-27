
class TempManager {

    constructor(renderer) {
        this.renderer = renderer
        this.dummyData = []
        this.observations=[]
    }

    getDataFromDB() {  
        $.get('insects', (DumInsectsData) => { //get all insects to from DB
            console.log(DumInsectsData)
            if (this.dummyData !== undefined) {
                this.dummyData = DumInsectsData
                console.log(this.dummyData)
                this.renderer.renderData(this.dummyData)

            }
        })
    }


  
    async getBugByName(insectName) { //find bug by Name

        let bugSearched= await $.get(`/insects/${insectName}`)
        console.log(bugSearched)
        this.dummyData=bugSearched 
        this.renderer.renderData(this.dummyData)
    
    }
 
 
    async getBugBySeason(insectSeason) { //find bug by Season

        let bugSearched= await $.get(`/insectseason/${insectSeason}`)
        this.dummyData=bugSearched 
        this.renderer.renderData(this.dummyData)
    
    }
    async getBugByLocation(insectLocaion) { //find bug by Location

        let bugSearched= await $.get(`/insectslocation/${insectLocaion}`)
        this.dummyData=bugSearched 
        this.renderer.renderData(this.dummyData)    
    }
    
    getObsDataFromDB() {  
        $.get('observations', (ObsInsectsData) => { //get all insects to from DB
            console.log(ObsInsectsData)
            if (this.dummyData !== undefined) {
                this.observations = ObsInsectsData
                console.log(this.dummyData)
                // this.renderer.renderCities(this.cityData)

            }
        })
    }

    async getObsBugByName(ObsinsectName) { //find bug by OBserved Name

        let obsBug= await $.get(`/insectsName/${ObsinsectName}`)
        this.observations=obsBug 
        // this.renderer.renderCities(this.cityData)
    }

    saveReport(newReport) {
        console.log("check")
        $.post(`/saveObservation`, newReport, function (res) {
            console.log("thank you for posting!")
            console.log(res)
            
            
        })
    }
    removebugs(bug) {
        const bugDelete =
            $.ajax({
                url: `/city/${cityName}`,
                method: `DELETE`,
                success: function (data) {

                    return data
                }
            })

        }

    }


