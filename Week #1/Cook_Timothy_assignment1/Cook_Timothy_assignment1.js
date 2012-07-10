/*	Timothy Cook
	June 28, 2012
	Project 1
	Plane Trip
*/


// Variables
var delayTime = "2 hours";
	flight = 'I\'m flying out to Orlando and need to get up at 7am to make my flight.';
	numberOfBags = 2;
	delayed = false;
	
// Outputs and Code
console.log(flight)
if (delayed === false) {
	console.log("I check the status of my flight and see that it is on time, so I start to pack my bags.");
	if (numberOfBags < 3) {
		console.log("All of my clothes and stuff will fit in " + numberOfBags + " bags, so I don't need to pay for a checked bag.");
	} else {
		console.log("Because my clothes could not fit in " + numberOfBags + " bags, I will need to pay for a checked bag.");
	};
} else {
	console.log("I check the status of my flight and see that it is delayed by " + delayTime + ".")
	if (delayTime >= "2 hours") {
		console.log("The flight is delayed long enough for me to eat some breakfast.");
	} else { 
		console.log("The flight is not delayed long enough for me to get breakfast, so I will starve.");
	};
};
