// var video = document.querySelector('#PlayerOne');

var video = document.querySelector('#player1'); 

window.addEventListener("load", function() {
	video = document.querySelector('#player1')
	console.log("Good job opening the window")
	video.playbackRate = 1;
	video.loop = false
	video.autoplay = false;
	console.log("Auto play is set to "+video.autoplay)
	console.log("Loop is set to "+video.loop)
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	document.querySelector("#volume").innerHTML= video.volume *100 + "%"
	video.play()
});


document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video")
	video.pause()
});


document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow down Video")
	video.playbackeRate *= 0.9
	console.log("Slow down Video", video.playbackeRate)
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log('Speed up video')
	video.playbackeRate /= .90
	console.log("Speed is", video.playbackeRate)
});

document.querySelector("#mute").addEventListener("click", function() {
	console.log(this)
	if (video.muted == true){
		console.log('UNMUTED')
		video.muted = false
		this.innerHTML = 'mute'
	}
	else{
		console.log('MUTE')
		video.muted = true
		this.innerHTML = 'Unmute'
	}
});


document.querySelector("#slider").addEventListener("click", function() {
	console.log('current volume', video.volume)
	video.volume = this.value/100
	console.log("current value is", video.volume)
	console.log(document.querySelector("#slider").innerHTML = video.volume *100 + "%")
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log('Skip Ahead')
	video.currentTime += 10 
	if (video.currentTime == video.duration){
		video.currentTime = 0 
	}
	console.log('Video current time is: ', video.currentTime)
});


document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add('oldSchool')
});

document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove('oldSchool')
});
