var wrote = document.getElementById('writeh1auto');
function write(elem, str, duration) {
	var elem = elem;
	var length = str.length	
	var ms = (duration*1000)/length;
	var currStr = "";
	var i = 0;
	var int = setInterval(type, ms);
	console.log(currStr);
	function type() {
		currStr += str[i]
		elem.innerHTML = currStr
		
		i += 1;
		if (i === length) {
			setTimeout(function() { elem.innerHTML = currStr}, 2000);
			clearInterval(int);
		}
	}
}

setTimeout(write(wrote, "Samy CABRANI, étudiant en BTS SIO ", 3), 1500);