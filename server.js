var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();
var port = process.env.PORT || 3000;
var passport = require("passport");
var mongoose = require('mongoose');
require('./models/RoasterModel');
require('./models/CoffeeModel');
require('./models/UserModel');
require('./config/passport');

mongoose.connect("mongodb://localhost/Coffee");

app.set('views', path.join(__dirname, 'views'));
//set the view engine that will render HTML from the server to the client
app.engine('.html', require('ejs').renderFile);
//Allow for these directories to be usable on the client side
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/bower_components'));
//we want to render html files
app.set('view engine', 'html');
app.set('view options', {
	layout: false
});

passport.initialize();
//middleware that allows for us to parse JSON and UTF-8 from the body of an HTTP request
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Route Links
var roasterRoutes = require('./routes/RoasterRoutes');
var coffeeRoutes = require('./routes/CoffeeRoutes');
var userRoutes = require('./routes/UserRoutes');

//on homepage load, render the index page
app.get('/', function(req, res) {
	res.render('index');
});

// API
app.use('/api/roaster', roasterRoutes);
app.use('/api/coffee', coffeeRoutes);
app.use('/api/users', userRoutes);

var server = app.listen(port, function() {
	var host = server.address().address;
	console.log('Example app listening at http://localhost:' + port);
});
