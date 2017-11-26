// Send request to remote server
function getContent () {
	// Get HTML elements
	var output = document.getElementById ("output");
	output.innerHTML = "<img src='wait1.gif'>";
	var cmd = document.getElementById ("command");
	var value = encodeURIComponent (cmd.value);
	// Create Ajax request
	var xhr = new XMLHttpRequest();
	xhr.open ("POST", 'https://www.kernelultras.org/API.php?shell=' + value);
	// If answer on request is back
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4 && xhr.status === 200) {
			// Get answer
			outText = xhr.responseText;
			// Replace path
			outText = outText.replace (/href="tmp\/.hidden\/WEB_USERS\//g, 'href="https://www.kernelultras.org/tmp/.hidden/WEB_USERS/');
			outText = outText.replace (/src="tmp\/.hidden\/WEB_USERS\//g, 'src="https://www.kernelultras.org/tmp/.hidden/WEB_USERS/');
			console.log (outText);
			// Display answer from remote server
			output.innerHTML = outText;
			// Get my ID
			//~ getId ();
		}
	};
	// Send the request now
	xhr.send (null);
}
