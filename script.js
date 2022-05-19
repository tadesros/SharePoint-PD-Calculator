"use strict";

document.addEventListener("DOMContentLoaded", () => {
	//Click Event to Calculate
	btn1_calculate.addEventListener("click", calculateValue);
});

function calculateValue() {
	//Get value from LRP Rating
	//Get elements
	let elRating = parseInt(document.getElementById("lrpRating").value);
	let projectChoice = parseInt(document.getElementById("Prioritize").value);
	let calcScore = elRating * projectChoice;

	console.log("Rating: " + elRating);
	console.log("Project Choice: " + projectChoice);

	console.log("Calculated Score: " + calcScore);

	document.getElementById("calcScore").innerHTML = calcScore;

	//Calculate the Result
}
