function change(element) {
	var a = element.innerHTML;

	switch(a) {
		case "Coffee":
			document.getElementById('img').src = "images/coffee2.png";
			document.getElementById('img').style.marginLeft = "120px";

			document.getElementById('wel').innerHTML = "Coffee";
			document.getElementById('wel').style.marginLeft = "780px";
			document.getElementById('wel').style.height = "150px";
			break;

		case "About Us":
			document.getElementById('img').src = "images/coffee2.png";
			document.getElementById('img').style.marginLeft = "120px";

			document.getElementById('wel').innerHTML = "About Us";
			document.getElementById('wel').style.marginLeft = "780px";
			document.getElementById('wel').style.height = "150px";
			break;
		case "Contacts":
			document.getElementById('img').src = "images/coffee2.png";
			document.getElementById('img').style.marginLeft = "120px";

			document.getElementById('wel').innerHTML = "Contacts";
			document.getElementById('wel').style.marginLeft = "780px";
			document.getElementById('wel').style.height = "150px";
			break;
		case "Order Online":
			document.getElementById('img').src = "images/Order.png";
			document.getElementById('img').style.marginLeft = "120px";

			document.getElementById('wel').innerHTML = "Order Online";
			document.getElementById('wel').style.marginLeft = "690px";
			document.getElementById('wel').style.height = "150px";
			break;
	}
}

function big(element) {
	element.style.fontSize = "30px";
}

function small(element) {
	element.style.fontSize = "25px";
}