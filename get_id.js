// Get my ID from remote server
function getId () {
	// Get HTML elements
	var output = document.getElementById ("id");
	var value = encodeURIComponent ("id");
	// Create Ajax request
	var xhr = new XMLHttpRequest();
	xhr.open ("POST", 'https://www.kernelultras.org/API.php?shell=' + value);
	// If answer on request is back
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4 && xhr.status === 200) {
			outText = xhr.responseText;
			// Display answer from remote server
			output.innerHTML = outText;
		}
	};
	// Send the request now
	xhr.send (null);
}
