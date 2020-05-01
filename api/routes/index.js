var request = require('request');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); // If needed
	request.get('https://covidtracking.com/api/states/daily?state=MA', 
	function(error, response, body){
		var jsonParse = JSON.parse(body);
		res.send(jsonParse);
	});
});

module.exports = router;
