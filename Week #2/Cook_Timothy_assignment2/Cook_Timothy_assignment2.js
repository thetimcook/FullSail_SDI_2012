//alert("JavaScript works!");
/*		Tim Cook
		SDI 1207
		Project 2
		Functions and Loops
*/


// Variables
var passenger = "Tim Cook",
	numberOfBags = 2,
	airports = ["Springfield-Branson Airport", "Dallas-Fort Worth Airport", "Hartsfield-Jackson Atlanta Airport", "Orlando Sanford Airport"];

// Procedure
var trip = function (passenger) {
	if (passenger === "Tim Cook") {
		console.log(passenger + " will be flying to " + airports[3] + " from " + airports[0]);
	} else { 
		console.log("Tim Cook will not be traveling today");
	};
};// End of Procedure

// Boolean Function
var planeDelayed = function (delayed, delayTime) {
	if (delayed === true) {
		if (delayTime > 24) {
			return"My flight is delayed but, It is " + delayed + " that my flight is delayed until tomorrow.";
		} else {
			return"My flight is delayed but, It is " + !delayed + " that my flight is delayed until tomorrow.";
		};
	} else {
		return"It is " + !delayed + " that my flight is going to be on time.";
	};
};// End Boolean Function

// Number Function
var luggage = function (weight) {
	while (weight < 30) {
		console.log("I put some more clothes in my bag making the weight " + weight + " pounds");
		weight ++;
	};
	return "I finally end up with " + weight + " pounds of clothes in my luggage.";
};// End Number Function

// String Function
var getToTheAirport = function (driver, distance) {
	var rideToAirport = driver + " will take me to the airport which is " + distance + " away.";
	return rideToAirport;
};// End String Funtion

// Array Function
var flight = function (airports, stops) {
	for (var i = stops; i < 3; i++) {
		console.log("I fly from " + airports[i] + " to " + airports[i+1] + ". Flight " + (i+1) + " finished.");
	};
	return "I have finally reached " + airports[i] + ".";
};// End Array Function

// Returned Values / Outputs

console.log(trip(passenger));// Procedure
console.log(planeDelayed(true, 2));// Boolean Function
console.log(luggage(22));// Number Function
console.log(getToTheAirport("My parents", "6 miles"));// String Function
console.log(flight(airports, 0));// Array Function

/* I am still a little confused about the final delivery at the end, I guess I'll just have to fix that next time around. */




