var request = require('request');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
	request.get('https://covidtracking.com/api/states/daily?state=MA', 
	function(error, response, body){
		var jsonParse = JSON.parse(body);
	  	var positive = jsonParse[0]["positive"];
	  	var positiveInc = jsonParse[0]["positiveIncrease"];
	  	var deaths = jsonParse[0]["death"];
	  	var deathsInc = jsonParse[0]["deathIncrease"];
		res.render('index', { 
			positive: positive,
			positiveInc: positiveInc,
			deaths: deaths,
			deathsInc: deathsInc,
		});
	});
});

module.exports = router;
