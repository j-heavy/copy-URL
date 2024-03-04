function executeCopy(text) {
	var input = document.createElement('textarea');
	document.body.appendChild(input);
	input.value = text;
	input.focus(); 
	input.select();
	document.execCommand('Copy');
	input.remove();
}

function getHostname(url) {
	// Handle Chrome URLs
	return url.slice(8)
}

function setHostname(hostname) {

}

function closePopup() {
	window.close();
}


chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
	var hostname = getHostname(tabs[0].url);
	if (!hostname) { closePopup(); return; }
	// Copy to clipboard and shows a popup
	executeCopy(hostname);
	setHostname(hostname);
	setTimeout(closePopup, 700);
});