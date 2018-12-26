
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
                // this.renderer.renderCities(this.cityData)

            }
        })
    }


    async getBugByName(insectName) { //find bug by Name

        let bugSearched= await $.get(`/insectsName/${insectName}`)
        this.dummyData=bugSearched 
        // this.renderer.renderCities(this.cityData)
    
    }
 
    async getBugBySeason(insectSeason) { //find bug by Season

        let bugSearched= await $.get(`/insectseason/${insectSeason}`)
        this.dummyData=bugSearched 
        // this.renderer.renderCities(this.cityData)
    
    }
    async getBugByLocation(insectLocaion) { //find bug by Location

        let bugSearched= await $.get(`/insectsSeason/${insectLocaion}`)
        this.dummyData=bugSearched 
        // this.renderer.renderCities(this.cityData)    
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

    saveReport(form) {
      
        $.post(`/saveObservation`, form, function () {
            console.log("city saved")
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


    test=new TempManager()
    //  test.getDataFromDB()
    test.getBugByName('Crimson-speckled flunkey')