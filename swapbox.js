var lastIn = 0;

if (!document.layers && !document.getElementById) { document.styleSheets[0].disabled = true; }

onload = function() { if (document.layers) { document.layers["Bevel"].pageY = window.innerHeight - 211; document.layers["Bevel"].pageX = window.innerWidth - 231; } }

function swapIn(byid) {
	if (document.getElementById) {
		if (lastIn) { document.getElementById(lastIn).style.visibility = "hidden"; }
		document.getElementById(byid).style.visibility = "visible";
	} else if (document.layers) {
		if (lastIn) { document.layers[lastIn].visibility = "hide"; }
		if (navigator.userAgent.indexOf("Mac")) {
			document.layers[byid].pageY = window.innerHeight - 115;
			document.layers[byid].pageX = window.innerWidth - .2 * window.innerWidth;
		} else {
			document.layers[byid].pageY = window.innerHeight - 115;
			document.layers[byid].pageX = window.innerWidth - 0.49 * window.innerWidth;
		}
		document.layers[byid].visibility = "show";
}	}

function rememberLast(byid) { lastIn = byid; }