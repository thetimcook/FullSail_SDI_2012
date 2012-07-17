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
	if (passengers.length > 0) {
		while (passengers.length > 0) {
		console.log(passengers[passengers.length - 1] + " gets ready for the flight.");
		passengers.length --;
		}
	} else { 
		console.log("No one is flying today.");
	};
};// End of Procedure


console.log(trip(passengers));
