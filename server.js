const express = require('express')
const path = require('path');
const app = express();
const api = require("./server/routes/api")
const bodyParser = require('body-parser')


const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/buggestlistDB', { uslNewUrlParser : true})



app.use(express.static(path.join(__dirname, 'dist')));
app.use(express.static(path.join(__dirname, 'node_modules')));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use("/", api);


const port = 8080 
app.listen(port, function () {
    console.log(`Server running on ${port}`)
})
