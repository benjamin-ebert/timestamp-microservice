
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

var app = module.exports = express();
app.use(bodyParser.json());
app.use(cors());

app.get('/api/timestamp/:dateVal', function(req, res){
	var dateVal = req.params.dateVal;
	var dateFormattingOptions = {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	};

	if(isNaN(dateVal)){
		var naturalDate = new Date(dateVal);
		naturalDate = naturalDate.toLocaleDateString('en-us', dateFormattingOptions);
		var unixDate = new Date(dateVal).getTime()/1000;
	} else {
		var unixDate = dateVal;
		naturalDate = naturalDate.toLocaleDateString('en-us', dateFormattingOptions);
		var naturalDate = new Date(dateVal*1000);
	};

	res.json({
		'unix': unixDate,
		'natural': naturalDate,
	});
});

app.listen(process.env.PORT || 5000, function(){
	console.log('works');
})