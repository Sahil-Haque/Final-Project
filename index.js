//Import required modules
var express = require ('express');
var ejs = require ('ejs');
var bodyParser = require ('body-parser');
const mysql = require ('mysql');

//Creating the express application object
const app = express();
const port = 8000
app.use(bodyParser.urlencoded({ extended: true}))




