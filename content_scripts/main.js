// Main code for the Vigilante extension
// 2/26/2025
// Last updated 3/6/2025

// This section assumes we are on character.ai and we are viewing the privacy page
// https://character.ai/privacy
function readPrivacyPolicy() {
	// Get all p tags - these contain text
	const webText = document.getElementsByTagName("p");

	// Store the text in a variable
	let allText = "";
	for (let line of webText) {
		allText += line.textContent;
	}

	// Debug
	console.log("this is a test");
	console.log(allText);

	// prepare the alert text
	let alertText = "Vigilante Privacy notes:\n\n";

	// Check the privacy policy for anything about GDPR
	if (allText.includes("GDPR") || allText.includes("gdpr") || allText.includes("General Data Protection Regulation")) {
		console.log("character.ai has GDPR listed in its privacy policy");
		// let example = document.createElement("p");
		// example.textContent = "character.ai has GDPR listed in its privacy policy";

		alertText += "GDPR: character.ai has GDPR listed in its privacy policy\n\n";

	} else {
		console.log("Sorry, GDPR is not mentioned in the privacy policy");
	}

	if (allText.includes("CCPA") || allText.includes("ccpa") || allText.includes("California")) {
		console.log("CCPA: character.ai has CCPA listed in its privacy policy\n\n");
		alertText += "CCPA: character.ai has CCPA listed in its privacy policy\n\n";
	}

	alert(alertText);
}

// Wait until the page has loaded
window.onload = (event) => {
	console.log("page is fully loaded");
	readPrivacyPolicy();
}
