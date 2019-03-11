var friendsArray = require('../data/friends.js');

//exporting the api routes to be used through the server file.

module.exports = function (app) {

    //API GET requests. Displays all possible friends in JSON format from the database.
        app.get('/api/friends', function(req, res){
            res.json(friendsArray);
        });

    //API POST requests to handle survey results and friend finder logic.
        app.post('/api/friends', function(req,res){

            // New Friend object

            var newFriend = {
                name: req.body.name,
                photo: req.body.photo,
                scores: []
            };

    //create array to hold scores

            var scoresArray = [];
            for (var i = 0; i < req.body.scores.length; i++){
                scoresArray.push(parseInt(req.body.scores[i]))
            }
            newFriend.scores = scoresArray;

    //Check new friend entry with existing ones in the database file.
            var scoreComparisonArray = [];
            for (var i = 0; i< friendsArray.length; i++){

                var currentComparison = 0;
                for (var j = 0; j < newFriend.scores.length; j++){
                    currentComparison += Math.abs(newFriend.scores[i]-friendArray[i].scores[i]);
                }
            //push each comparison between friends to array
            scoreComparisonArray.push(currentComparison)
            }

            var bestFriendOption = 0;
            for(var i = 1; i < scoreComparisonArray.length; i++){
                if(scoreComparisonArray[i] <= scoresComparisonArray[bestFriendOption]){
                    bestFriendOption = i;
                }        
            }    
        
            var bestFriendMatch = friendsArray[bestFriendOption];
            res.json(bestFriendMatch);
            friendsArray.push(newFriend)
        });
};
