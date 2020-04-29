var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var user = require('./db/db.js')

var app = express();

app.use(express.static(path.join(__dirname, './public')));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());


var PORT = process.env.PORT || 3500;

app.listen(PORT, () => {
    console.log(`Server is ready listening on port ${PORT} `);
});