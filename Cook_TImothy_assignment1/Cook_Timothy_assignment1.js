// JavaScript Project 1
// Author: Timothy Cook

var cupcake = true;
var cost = 5;
var fruitYogurt = "I'll get some Strawberry," + " Plain Tart," + " and Raspberry";
var toppings_1 = "I put Reese's," + " Oreo's," + " and Marshmallow Cream on my yogurt";
var toppings_2 = "I put Strawberries," + " Bananas," + " Gummy Worms," + " and Marshmallow Cream on my yogurt";

if (cupcake === true) {
	console.log("I'll get chocolate and cupcake");
	console.log(toppings_1);
} else {
	console.log(fruitYogurt);
	console.log(toppings_2);
};

if (cost <= 5) {
	console.log("I purchase and enjoy my frozen treat");
} else {
	console.log("I will have to go home empty handed");
};
