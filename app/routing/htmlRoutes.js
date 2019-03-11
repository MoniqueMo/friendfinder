//Node Dependencies
var path = require('path');

//adding two html routes avaialble
module.exports = function (app){
app.get('/survey', function(req,res){
    res.sendFile(path.join(__dirname + '/../public/survey.html'));
});

//default USE route that leads to home.html which displays the home page.
app.use(function (req,res){
    res.sendFile(path.join(__dirname + '/../public/home.html'));
});

};