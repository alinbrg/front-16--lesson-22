let scrollDownbtn = document.querySelector('#scroll-down');
let scrollUpbtn = document.querySelector('#scroll-up');
let html = document.querySelector('html');

let scrollDownInterval;
scrollDownbtn.addEventListener('click', scrollDown2);

let scrollUpInterval;
scrollUpbtn.addEventListener('click', function() {
	scrollUpInterval = setInterval(scrollUp, 2);
});

function scrollDown2() {
	window.requestAnimationFrame(function() {
	    html.scrollTop += 10;

	    if(html.scrollTop < 1000) {
			scrollDown2();
		}
	});
}


function scrollDown() {
	html.scrollTop += 10;
	console.log("scrollDown " + html.scrollTop);

	if(html.scrollTop >= 1000) {
		clearInterval(scrollDownInterval);
	}
}

function scrollUp() {
	html.scrollTop -= 10;
	console.log("scrollUp " + html.scrollTop);

	if(html.scrollTop <= 0) {
		clearInterval(scrollUpInterval);
	}
}
