var video = document.getElementById("myVideo");
var btn = document.getElementById("myBtn");

function Redirect1(nothing) {
	redirect("https://6100mifi-server-001.000webhostapp.com/cdn/html1.html", undefined)
	return nothing
}

function Redirect2(nothing) {
	redirect("https://6100mspersonalxc24sitedatastorage.6100m.repl.co/", undefined)
	return nothing
}

function Redirect3(nothing) {
	redirect("https://raw.githubusercontent.com/6100m/depot-sinjoh/master/site/apis/vidapi/000/vidapi.js", undefined)
	return nothing
}

function pausebuttoninitalizer(n) {
	if(video.paused) {
		video.play();
		btn.innerHTML = "Pause";
		return n
	} else {
		video.pause();
		btn.innerHTML = "Play";
		return n
	}
}

function redirect(u, n) {
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
