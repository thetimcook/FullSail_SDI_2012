// alert("JavaScript works!");
/*		Tim Cook
		SDI 1207
		Project 4
		Reusable Data Functions
*/

//Start Function Library
var library = function () {
	
// String Problem #1:  Does a string follow a 123-456-7890 pattern like a phone number?
	var checkNumber = function (number) {
		var regexObj = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
		if (regexObj.test(number)) {
			return true;
		} else {
			return false;
		};
	};
	console.log(checkNumber("000-000-0000"));
// End #1
	
// String Problem #2:  Does a string follow an aaa@bbb.ccc pattern like an email address?
	var checkMail = function (email) {
		var regexObj = /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/;
		if (regexObj.test(email)) {
			return true;
		} else {
			return false;
		};
	};
	console.log(checkMail("name@mail.com"));
// End #2
	
// String Problem #3:  Is the string a URL? (Does it start with http: or https:?)
	var checkUrl = function (url) {
		if (url.substring(0, 5) == "http:" || url.substring(0, 6) == "https:"
		) {
			return true;	
		} else {
			return false;
		};
	};
	console.log(checkUrl("http://www.theverge.com"));
// End #3
	
// String Problem #4
	var capWord = function (words) {
		var wordList = words.split(" ");
		for (i = 0; i < wordList.length; i++) {
			console.log(wordList[i].charAt(0).toUpperCase() + wordList[i].slice(1));
		};
	};
	capWord("john mark jason michael daniel");
// End #4
	
// String Problem #5:  Replace "," with "/" in a string.
	var alterString = function (string) {
		var newstring = string.replace(/,/g, "/");
		return newstring;
	};
	console.log(alterString("a,b,c"));
// End #5
	
// Number Problem #1:  Format a number to use a specific number of decimal places, as for money: 2.1 - 2.10
	var changeMoney = function(money) {
		var output = money.toFixed(2);
		return output; 
	};
	console.log(changeMoney(2.1));
// End #1
	
// Nubmer Problem #2:  Fuzzy-match a number: is the number above or below a number within a certain percent?
	Number.prototype.isFuzzy = function(compare, percent) {
		var dev = compare*(percent/100), n = +this;
		return n >= compare-dev && n <= compare+dev;
    };
    var n = 40;
    console.log(n.isFuzzy(25,75));// a range from 6.25 - 43.75
// End #2
	
// Number Problem #3:  Find the number of hours or days difference between two dates.
	var dateDiff = function (date1,date2,interval) {
	    var second=1000, minute=second*60, hour=minute*60, day=hour*24, week=day*7;
	    date1 = new Date(date1);
	    date2 = new Date(date2);
	    var timediff = date2 - date1;
	    if (isNaN(timediff)) return NaN;
	    switch (interval) {
	        case "years": return date2.getFullYear() - date1.getFullYear();
	        case "months": return (
	            ( date2.getFullYear() * 12 + date2.getMonth() )
	            -
	            ( date1.getFullYear() * 12 + date1.getMonth() )
	        );
	        case "weeks"  : return Math.floor(timediff / week);
	        case "days"   : return Math.floor(timediff / day); 
	        case "hours"  : return Math.floor(timediff / hour); 
	        case "minutes": return Math.floor(timediff / minute);
	        case "seconds": return Math.floor(timediff / second);
	        default: return undefined;
	    };
	};
	console.log(dateDiff("07/27/1992", "07/27/2012", "years"));
// End #3
	
// Number Problem #4:  Convert a string number into a real number that can be calculated.
	var numberFromString = function (number) {
		return parseFloat(number);
	};
	console.log(numberFromString("42"));
// End #4

// Array Problem #1
/*	var smallestValue = function (numbers, value) {
		newValue = Math.min(numbers);
		return  newValue;
	};
	console.log(smallestValue([1,2,3,4,5,6,7,8,9,10], 4));
*/
// End #1

// Array Problem #2


// End #2

// Array Problem #3


// End #3
};
library();






