// var video = document.querySelector('#PlayerOne');

var video = document.querySelector('#player1');; 

window.addEventListener("load", function() {
	video = document.querySelector('#player1')
	console.log("Good job opening the window")
	video.loop = false
	video.autoplay = false;
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video")
	video.play()
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video")
	video.pause()
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log('Slow down video')
	video.playbackeRate*=.90
	console.log("Speed is", video.playbackeRate)
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log('Speed up video')
	video.playbackeRate/=1.1
	console.log("Speed is", video.playbackeRate)
});


document.querySelector("#slider").addEventListener("click", function() {
	console.log('Speed up video', video.volume)
	video.volume = this.value/100
	console.log("current value is", video.volume)
	console.log(document.querySelector("#slider"))
});

document.querySelector("#mute").addEventListener("click", function() {
	// console.log('MUTED');
	// video.muted = true;
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

// document.querySelector("faster").addEventListener("click", function(){
// 	video.playbackRate = 4;
// 	console.log("Video speed", video.playbackeRate);
// });
// document.getElementById("faster").playbackRate = 1.5;


// document.querySelector("#slower").addEventListener("click", function() {
// 	console.log('Slow down video');
// 	video.playbackeRate*= .90;
// 	video.play();
// 	console.log("Speed is", video.playbackeRate)

// });



// document.querySelector("#p").addEventListener("click", function() {
// 	pauseButton.disabled = false;
// });




// document.querySelector("#slower").addEventListener("click", function() {
// 	console.log('Slow down video');
// 	video.playbackeRate*=0.90
// 	console.log("Speed is", video.playbackeRate)
// });

// document.querySelector("#faster").addEventListener("click", function() {
// 	console.log('Speed up video');
// 	video.playbackeRate/=1.1
// 	console.log("Speed is", video.playbackeRate)
// });

// document.querySelector("#SkipAhead").addEventListener("click", function() {
// 	console.log('Speed up video');
// 	video.playbackeRate/=1.1
// 	console.log("Speed is", video.playbackeRate)
// });


// document.querySelector("#slider").addEventListener("click", function() {
// 	console.log('Speed up video', video.volume);
// 	video.volume = this.value/100
// 	console.log("current value is", video.volume)
// 	console.log(document.querySelector("#volume")
// });

// document.querySelector("#volume").innerHTML({
// 	console.log('Speed up video');
// 	video.playbackeRate*=1.1
// 	console.log("Speed is", video.playbackeRate)
// });
// // 
// // doc

