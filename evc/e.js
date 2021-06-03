function q() { 
	n = document.getElementById("i");
	return n
}

function r() {
	n = document.getElementById("k");
	return n
}

function h(a) {
	n = Math.random().toString(36).substring(2);
	console.log(a + n)
	return n
}

function s(n) {
	x("https://6100mifi-server-001.000webhostapp.com/cdn/html1.html", h("Retro Seed Is: "))
	return n
}

function t(n) {
	x("https://6100mspersonalxc24sitedatastorage.6100m.repl.co/", h("Backup Seed Is: ")))
	return n
}

function v(n) {
	x("https://raw.githubusercontent.com/6100m/depot-sinjoh/master/site/apis/vidapi/000/vidapi.js", h("JS Download Seed Is: "))
	return n
}

function z(n) {
	x("https://raw.githubusercontent.com/6100m/depot-sinjoh/master/site/apis/vidapi/001/vidapi.css", h(" Download Seed Is: "))
	return n
}

function b(n) {
	var e = location.host.split('.').reverse();
	var z = '.' + e[1] + '.' + e[0];
	x(z + "/evc/e.js")
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
