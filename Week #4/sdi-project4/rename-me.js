// alert("JavaScript works!");
/*		Tim Cook
		SDI 1207
		Project 4
		Reusable Data Functions
*/

//Start Function Library
var library = function () {
	
	// String Problem #1:  Does a string follow a 123-456-7890 pattern like a phone number?
	var number = "000-000-0000"
	
	var checkNumber = function (number) {
		var regexObj = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
		if (regexObj.test(number)) {
			return true;
		} else {
			return false;
		};
	};
	console.log(checkNumber(number));
	// End #1
	
	// String Problem #2:  Does a string follow an aaa@bbb.ccc pattern like an email address?
	var email = "name@mail.com"
	
	var checkMail = function (email) {
		var regexObj = /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/;
		if (regexObj.test(email)) {
			return true;
		} else {
			return false;
		};
	};
	console.log(checkMail(email));
	// End #2
	
	// String Problem #3:  Is the string a URL? (Does it start with http: or https:?)
	var url = "http://www.theverge.com"
	
	var checkUrl = function (url) {
		if (url.substring(0, 5) == "http:" || url.substring(0, 6) == "https:"
		) {
			return true;	
		} else {
			return false;
		};
	};
	console.log(checkUrl(url));
	// End #3
	
	// String Problem #4
	
	
	// End #4
	
	// String Problem $5
	
	
	// End #5
	
	// Number Problem #1
	var money = 2.1
	
	var changeMoney = function(money) {
		var output = Math.round(money);
		return output; 
	};
	console.log(changeMoney(money));
	// End #1
	
	// Nubmer Problem #2
	
	
	// End #2

};
console.log(library());


