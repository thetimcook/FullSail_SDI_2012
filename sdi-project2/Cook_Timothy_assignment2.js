//alert("JavaScript works!");

// VARIABLES AND FUNCTIONS
var flavors =  ["Chocolate", "CupCake", "Strawberry", "Plain Tart", "Raspberry"],
	toppings = ["Reese's", "Oreo's", "Marshmallow Cream", "Strawberries", "Bananas", "Gummy Worms"],
	money = 10;
//Procedure
var storeOpen = true
	if (storeOpen = true) {
		console.log("I go into Peachwave to get a tasty frozen treat.");
	} else { console.log("I will wait for them to open.");
};
//Boolean Function
var getACup = function() {
	var cupSize = ["small", "medium", "large"]
	if (hungery = true) {
		console.log("I will grab a " + cupSize[2] + " cup because I am starving.");
	} else { console.log("I will grab a " + cupSize[1] + "cup.");
	};
};
//Number Function
var getSomeYogurt = function() {
	var yogurt = 4;
	while (yogurt > 0) {
		console.log("I have room for " + yogurt + " flavors in my cup.");
			console.log("So I get " + flavors[yogurt-1]);
		yogurt--;
	};
};
//String Function
var getSomeToppings = function() {
	console.log("I will then put " + toppings[2] + ", " + toppings[3] + " and " + toppings[4] + " on my yogurt.");
};
//Array Function
var weighAndPay =function(cash) {
	var costPerOunce = .42,
		wholeOuces;
	if (cash < costPerOunce) {
		console.log("I just waisted a lot of time because I have no money!");
		wholeOuces = 0;
	} else {
		wholeOuces = Math.floor(cash / costPerOunce);
	}
	return wholeOuces;
};
// STATIC CODE

getACup();
	console.log("I then go over the the yogurt machines and start dispensing my yogurt.");
getSomeYogurt();
	console.log("I now move over to the toppings bar where the magic really happens.");
getSomeToppings();
	console.log("I then need to put my creation on the scale to be weighed and then payed for.");
var yogurtPurchased = weighAndPay(money);
	console.log("Woot! I now have " + yogurtPurchased + " ounces of tasty frozen yogurt to enjoy!");


	
	
	
	
	