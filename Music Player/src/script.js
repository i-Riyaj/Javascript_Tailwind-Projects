const song = document.querySelector('#song');
const progressBar = document.getElementById('progressBar');
const PlayPauseBtn = document.getElementById('PlayPauseBtn');
const backwardBtn = document.getElementById('backwardBtn');
const forwardBtn = document.getElementById('forwardBtn');

// max and current value of progressBar
song.onloadedmetadata = () => {
    progressBar.max = song.duration;
    progressBar.value = song.currentTime;
};

// function to run after user click on PlayPauseBtn
const playPause = () => {
    if(PlayPauseBtn.firstElementChild.classList.contains('fa-play')){
        PlayPauseBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
        song.play();
    }
    else if(PlayPauseBtn.firstElementChild.classList.contains('fa-pause')){
        PlayPauseBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
        song.pause();
    }
};

// updating the value of progressBar after each 0.5s while the song is playing
if(song.play()){
    setInterval( () => {
        progressBar.value = song.currentTime;
    }, 500 )
};

// changing songs currentTime accoding to progressBar value
progressBar.onchange = () => {
    song.currentTime = progressBar.value;
    PlayPauseBtn.innerHTML = `<i class='fa-solid fa-pause'></i>`;
    song.play();
};

// function to run after user click on backWardBtn
const skipBackward = () => {
    song.currentTime -= 10;
    song.play(); 
};

// function to run after user click on forwardBtn
const skipForward = () => {
    song.currentTime += 10;
    song.play();
}

// adding event listener for audio start
song.addEventListener('play', ()=>{
    PlayPauseBtn.innerHTML = `<i class='fa-solid fa-pause'></i>`;
});

// adding event for audio pause
song.addEventListener('pause', ()=>{
    PlayPauseBtn.innerHTML = `<i class='fa-solid fa-play'></i>`;
});

// adding event listener for audio end
song.addEventListener('ended', ()=>{
    PlayPauseBtn.innerHTML = `<i class='fa-solid fa-play'></i>`;
});

