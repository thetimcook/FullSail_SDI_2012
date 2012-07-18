// alert("JavaScript works!");
/*		Tim Cook
		SDI 1207
		Project 3
		Custom Flowchart and JSON Data
*/

// Global Variables
var passengers = ["Tim Cook", "Dale Cook", "Tammy Cook"];


// Procedure
var trip = function (passengers) {
	var nubmerOfPassengers = passengers.length
	if (nubmerOfPassengers > 0) {
		while (nubmerOfPassengers > 0) {
		console.log(passengers[nubmerOfPassengers - 1] + " gets ready for the flight.");
		nubmerOfPassengers --;
		}
	} else { 
		console.log("No one is flying today.");
	};
};// End of Procedure



// Array Function
var checkFlightStatus = function (json) {
	for (var i = 0; i < json.myFlights.length; i++){
		var flight = json.myFlights[i];
		console.log("We will be fling out of " + flight.departure + " at " + flight.departureTime + ":00am, and arriving at " + flight.arrival + " at " + flight.arrivalTime + ":00.");
	};
};


// Main Code

trip(passengers);

checkFlightStatus(json2);

