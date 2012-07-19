// alert("JavaScript works!");
/*		Tim Cook
		SDI 1207
		Project 3
		Custom Flowchart and JSON Data
*/

// Global Variables
var passengers = [" Tim Cook", " Dale Cook", " Tammy Cook"];


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

// Mutator Function
var flightDelayed = function (json) {
	var flight = json.myFlights[2];
	var delayed = flight.onTime;
	var delayed = false;
	return delayed
};//end Mutator Function

// Function
var onTime = function () {
	var flight = json.myFlights[2]
	var newTime = flight.departureTime
	var newTime2 = flight.arrivalTime
	if (delayed = true) {
		return
	} else { 
		var newTime = "3:30pm";
		var newTime2 = "5:00pm";
	};
};


// Function with JSON data
var checkFlightStatus = function (json) {
	for (var i = 0; i < json.myFlights.length; i++){
		var flight = json.myFlights[i];
		console.log( "We will be fling out of " + flight.departure + " at " + flight.departureTime + ", and arriving in " + flight.arrival + " at " + flight.arrivalTime + ".");
	};
	return" have now arrived in Orlando and can now begin our vacation!"
};// end function 




// Main Codef

trip(passengers);

console.log(flightDelayed(json2));

console.log( passengers + checkFlightStatus(json2));

