// vigilante.js
// idea: have the script read URL, inject content
// show info in the popup window
// this file handles everything related to the popup window

function runVigilante() {
	console.log("This is vigilante.js");

	// TBD - add code to read content text
}

// Report an error if the script cannot run
function reportError() {
	console.error("Could not run vigilante.js");
}


// attempt to inject the content script into the active tab
// if we can't do this, report an error
browser.tabs
	.executeScript({file: "/content_scripts/main.js"})
	.then(runVigilante)
	.catch(reportError);