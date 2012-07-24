// alert("JavaScript works!");
/*		Tim Cook
		SDI 1207
		Project 4
		Reusable Data Functions
*/


// String Problem #1
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

// String Problem #2
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

// String Problem #3
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



