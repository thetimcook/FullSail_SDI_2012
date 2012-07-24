// alert("JavaScript works!");
/*		Tim Cook
		SDI 1207
		Project 4
		Reusable Data Functions
*/


// String Problem #1:  Does a string follow a 123-456-7890 pattern like a phone number?
var number = "000-000-0000"

var checkNumber = function (number) {
	if (number.charAt(3) == "-",
		number.charAt(7) == "-",
		number.length === 12
	) {
		return true;
	} else {
		return false;
	};
};
console.log(checkNumber(number));
// End #1

// String Problem #2:  Does a string follow an aaa@bbb.ccc pattern like an email address?
var mail = "namename@mail.com"

var checkMail = function (mail) {
	if (mail.search("@") != "-1",
		mail.lastIndexOf(".") != "-1"
	) {
		return true;
	} else {
		return false;
	};	
};
console.log(checkMail(mail));
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





