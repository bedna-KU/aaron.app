function login () {
	var name = document.getElementById ("login_name");
	var pass = document.getElementById ("login_pass");
	//~ ?step=action&shell=login++bedna&data=alfavil
	//~ alert (cmd.value);
	var xhr = new XMLHttpRequest();
	//~ xhr.open("GET", 'https://www.kernelultras.org/API.php?shell=' + cmd);
	//~ xhr.open ("POST", 'https://www.kernelultras.org/API.php?step=action&shell=login++'.bedna.'&data='.alfavil);
	xhr.open ("POST", 'https://www.kernelultras.org/API.php?step=action&shell=login++' + name.value + '&data=' + pass.value);
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
