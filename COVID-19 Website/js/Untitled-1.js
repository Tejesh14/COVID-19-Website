var unirest = require("unirest");

var req = unirest("GET", "https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/stats");

req.query({
	"country": "india"
});

req.headers({
	"x-rapidapi-host": "covid-19-coronavirus-statistics.p.rapidapi.com",
	"x-rapidapi-key": "1bc493ded3mshc8058eeb2018e4dp1dd0b5jsn96c5b3814206"
});


req.end(function (res) {
	if (res.error) throw new Error(res.error);

	console.log(res.body);
});