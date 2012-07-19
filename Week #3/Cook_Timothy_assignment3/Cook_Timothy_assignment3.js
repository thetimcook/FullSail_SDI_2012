// alert("JavaScript works!");
/*		Tim Cook
		SDI 1207
		Project 3
		Custom Flowchart and JSON Data
*/

// Global Variables
var passengers = [" Tim Cook", " Dale Cook", " Tammy Cook"];
var restaurants = {
	"mexican": ["Azteca D'Oro", " Agave Azul", " Gringos Lacos"],
	"american": ["Earl of Sandwich", " Mellow Mushroom", " Dextar's"],
	"chinese": ["Nona Sushi", " P.F. Chang's", " China One"]
};
var hungry = true;

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
	return delayed;
};//end Mutator Function

// Function with JSON data
var checkFlightStatus = function (json) {
	for (var i = 0; i < json.myFlights.length; i++){
		var flight = json.myFlights[i];
		console.log( "We will be fling out of " + flight.departure + " at " + flight.departureTime + ", and arriving in " + flight.arrival + " at " + flight.arrivalTime + ".");
	};
	return " have now arrived in Orlando and can now begin our vacation!";
};// end function 

// Boolean Function
var food = function (hungry) {
	var chinese = restaurants.chinese;
	if (hungry === true) {
		return chinese;
	} else {
		return "no restaurants";
	};
};// end Boolean Function

// Number Function
var hotelDistance = function (distance) {
	var maxDistance = 3;
		while (distance > maxDistance) {
		console.log("Finding a hotel closer than " + distance + " miles away.");
		distance--;
		};
	return distance;
}; // end number function


// Main Code
trip(passengers);

console.log( "It is " + !flightDelayed(json2) + " that my last flight is delayed.");

console.log( passengers + checkFlightStatus(json2));

if (hungry === true) {
	console.log("Because it is " + hungry + " that we are hungry." + " We will eat at one of " + food(hungry) + ".");
} else {
	console.log("We will not eat because it is " + hungry + " that we are hungry.");
};

console.log("The Hotel is " + hotelDistance(9) + " miles away, so we have time to get some dessert.");







