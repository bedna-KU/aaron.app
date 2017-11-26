// Log on remote server
function login () {
	// Get HTML elements
	var name = document.getElementById ("login_name");
	var pass = document.getElementById ("login_pass");
	// Create Ajax request
	var xhr = new XMLHttpRequest();
	xhr.open ("POST", 'https://www.kernelultras.org/API.php?step=action&shell=login++' + name.value + '&data=' + pass.value);
	// If answer on request is back
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4 && xhr.status === 200) {
			outText = xhr.responseText;
			// Display answer from remote server
			output.innerHTML = outText;
			// Get my ID
			getId ();
		}
	};
	// Send the request now
	xhr.send (null);
}
