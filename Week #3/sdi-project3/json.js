/*		Tim Cook
		SDI 1207
		Project 3
		JSON Data
*/


var json = {
	"myFlights": {
		"001": {
			"flight": "675",
			"terminal": "A2",
			"onTime": true,
			"departure": "Springfield-Branson Airport",
			"departureTime": 8,
			"arrival": "Dallas-Fort Worth Airport",
			"arrivalTime": 10
		},
		"002": {
			"flight": "676",
			"terminal": "B6",
			"onTime": true,
			"departure": "Dallas-Fort Worth Airport",
			"departureTime": 12,
			"arrival": "Hartsfield-Jackson Atlanta Airport",
			"arrivalTime": 13.5
		},
		"003": {
			"flight": "367",
			"terminal": "A12",
			"onTime": true,
			"departure": "Hartsfield-Jackson Atlanta Airport",
			"departureTime": 14.5,
			"arrival": "Orlando Sanford Airport",
			"arrivalTime": 16
		}
	}
};

var json2 = {
	"myFlights": [
		{
			"flight": "675",
			"terminal": "A2",
			"onTime": true,
			"departure": "Springfield-Branson Airport",
			"departureTime": "8:00am",
			"arrival": "Dallas-Fort Worth Airport",
			"arrivalTime": "10:00am"
		},
		{
			"flight": "676",
			"terminal": "B6",
			"onTime": true,
			"departure": "Dallas-Fort Worth Airport",
			"departureTime": "12:00pm",
			"arrival": "Hartsfield-Jackson Atlanta Airport",
			"arrivalTime": "1:30pm"
		},
		{
			"flight": "367",
			"terminal": "A12",
			"onTime": true,
			"departure": "Hartsfield-Jackson Atlanta Airport",
			"departureTime": "2:30pm",
			"arrival": "Orlando Sanford Airport",
			"arrivalTime": "4:00pm"
		}
	
	]
};
