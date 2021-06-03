var q = document.getElementById("i");
var r = document.getElementById("k");
function s(n) {
	x("https://6100mifi-server-001.000webhostapp.com/cdn/html1.html", undefined)
	return n
}
function t(n) {
	x("https://6100mspersonalxc24sitedatastorage.6100m.repl.co/", undefined)
	return n
}
function v(n) {
	x("https://raw.githubusercontent.com/6100m/depot-sinjoh/master/site/apis/vidapi/000/vidapi.js", undefined)
	return n
}
function w(n) {
	if(video.paused) {
		q.play();
		r.innerHTML = "Pause";
		return n
	} else {
		q.pause();
		r.innerHTML = "Play";
		return n
	}
}
function x(u, n) {
	var u = navigator.userAgent.toLowerCase(),
		i = u.indexOf('msie') !== -1,
		v = parseInt(u.substr(4, 2), 10);
	if(i && v < 9) {
		var l = document.createElement('a');
		l.href = url;
		document.body.appendChild(l);
		l.click();
		return n
	} else {
		window.location.href = u;
		return n
	}
}
