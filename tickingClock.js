var today = new Date();
var now = "The time is " + today.toLocaleTimeString();

console.log(now);

$(document).ready(function() {
	$("span").append(now);
});