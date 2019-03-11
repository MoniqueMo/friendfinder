//require node dependencies
var express = require('express');
var path = require('path');

//set up Express App
var app = express();
var PORT = process.env.PORT || 8080;
app.use(express.static(path.join(__dirname, 'public')));

//Set up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

//set up server routing map
require('./app/routing/apiRoutes')(app);
require('./app/routing/htmlRoutes')(app);

//port listener
app.listen(PORT, function(){
    console.log("app listening on PORT: " + PORT);
});

