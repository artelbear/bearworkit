timeend= new Date(2017, 11, 17);

function time() {
	today = new Date();
	today = Math.floor((timeend-today) / 1000);
	tsec = today % 60;
	today = Math.floor(today / 60);
	if (tsec < 10) {
		tsec = '0' + tsec
	};
	tmin = today % 60;
	today = Math.floor(today / 60);
	if(tmin < 10) {
		tmin = '0' + tmin
	};
	thour = today % 24;
	today = Math.floor(today / 24);
	timestr = today + " . " + thour + " : " + tmin + " : " + tsec;
	document.getElementById('WhenRel').innerHTML = timestr;
	window.setTimeout("time()", 1000);
}