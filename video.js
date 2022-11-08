// var video = document.querySelector('#PlayerOne');

var video = document.querySelector('#player1');; 

window.addEventListener("load", function() {
	video = document.querySelector('#player1');
	console.log("Good job opening the window");
	video.loop = false
	video.autoplay = false;
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	video.querySelector("#volume").innerHTML = video.volume * 100 + '%'();
});


// document.querySelector("#p").addEventListener("click", function() {
// 	pauseButton.disabled = false;
// });

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video")
	video.pause(); 
});


document.querySelector("#slower").addEventListener("click", function() {
	console.log('Slow down video');
	video.playbackeRate*=0.90
	console.log("Speed is", video.playbackeRate)
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log('Speed up video');
	video.playbackeRate/=1.1
	console.log("Speed is", video.playbackeRate)
});

document.querySelector("#SkipAhead").addEventListener("click", function() {
	console.log('Speed up video');
	video.playbackeRate/=1.1
	console.log("Speed is", video.playbackeRate)
});


document.querySelector("#slider").addEventListener("click", function() {
	console.log('Speed up video', video.volume);
	video.volume = this.value/100
	console.log("current value is", video.volume)
	console.log(document.querySelector("#volume")
});

document.querySelector("#volume").innerHTML({
	console.log('Speed up video');
	video.playbackeRate*=1.1
	console.log("Speed is", video.playbackeRate)
});
// 
// doc

