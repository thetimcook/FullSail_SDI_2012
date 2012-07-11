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
}; // End of Procedure

// Boolean Function
var planeDelayed = function (onTime, Delayed) {
	if ((onTime === true) + (Delayed === false)) {
		return"It is " + onTime + " that the plane is going to be on time today.";
	} else {
		return"It is " + Delayed + " that the plane is going to be on time.";
	};
};// End Boolean Function

// Number Function








console.log(planeDelayed(true, false));
