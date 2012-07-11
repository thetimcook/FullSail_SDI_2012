//alert("JavaScript works!");
/*		Tim Cook
		SDI 1207
		Project 2
		Functions and Loops
*/


// Variables
var passenger = "Tim Cook",
	numberOfBags = 2,
	airports = ["Springfield-Branson Airport", "Hartsfield-Jackson Atlanta Airport", "Orlando Sanford Airport"];

// Procedure
if (passenger === "Tim Cook") {
	console.log(passenger + " will be flying to " + airports[2] + " from " + airports[0]);
	} else { 
	console.log("Tim Cook will not be traveling today");
};// End of Procedure

// Boolean Function
var planeDelayed = function (onTime, Delayed) {
	if ((onTime === true) + (Delayed === false)) {
		return"It is " + onTime + " that the plane is going to be on time today.";
	} else {
		return"It is " + Delayed + " that the plane is going to be on time.";
	};
};// End Boolean Function

// Number Function
var luggage = function (weight) {
	while (weight < 30) {
		console.log("I put some more clothes in my bag making the weight " + weight + " pounds");
		weight ++;
	};
	return"I finally end up with " + weight + " pounds of clothes in my luggage.";
};// End Number Function

// String Function
var getToTheAirport = function (driver, distance) {
	var rideToAirport = driver + " will take me to the airport which is " + distance + " away.";
	return rideToAirport;
};// End String Funtion

// Array Function






// Returned Values / Output 

console.log(planeDelayed(true, false));
console.log(luggage(22));
console.log(getToTheAirport("My parents", "6 miles"));

