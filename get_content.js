function getContent () {
	var output = document.getElementById ("output");
	output.innerHTML = "<img src='wait1.gif'>";
	var cmd = document.getElementById ("command");
	var value = encodeURIComponent (cmd.value);
	//~ alert (cmd.value);
	var xhr = new XMLHttpRequest();
	//~ xhr.open("GET", 'https://www.kernelultras.org/API.php?shell=' + cmd);
	xhr.open ("POST", 'https://www.kernelultras.org/API.php?shell=' + value);
	xhr.onreadystatechange = function() { 
		if (xhr.readyState === 4 && xhr.status === 200) {
			outText = xhr.responseText;
			//~ outText = decodeURI (outText);
			//~ outText = outText.replace(/\n/g,"<br>");
			output.innerHTML = outText;
			//~ alert (xhr.responseText);
		}
	};
	xhr.send (null); // Send the request now
	getId ();
}
