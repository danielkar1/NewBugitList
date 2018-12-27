class Renderer {
    constructor () {
    }
    renderData (dummyData) {
        $(".insect-container").empty();
        const source = $("#insect-template").html()
        let template = Handlebars.compile(source);
        let newHTML = template({dummyData});
        $(".insect-container").append(newHTML)
    }
}