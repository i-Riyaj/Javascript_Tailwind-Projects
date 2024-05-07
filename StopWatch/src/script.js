let [hr, min, sec] = [0, 0, 0];
const displayTime = document.getElementById('displayTime');
const startBtn = document.getElementById('startBtn');
let timer = null;

const stopWatch = () => {
    sec++;
    if(sec === 60){
        sec = 0;
        min++;
        if(min === 60){
            min = 0;
            hr++;
        }
    }
    let h = hr<10 ? '0' + hr : hr;
    let m = min<10 ? '0' + min : min;
    let s = sec<10 ? '0' + sec : sec;
    displayTime.innerHTML = `${h} : ${m} : ${s}`;
};

// function to run when the watch starts
const startWatch = () => {
    if(timer !== null){
        clearInterval(timer);
    }
    timer = setInterval(stopWatch, 1000);
    startBtn.firstElementChild.src = '../assets/images/pauseRedIcon.png';
};

// function to run when watch stops
const stopTimer = () => {
    clearInterval(timer);
    startBtn.firstElementChild.src = '../assets/images/start.png';
};

// function to run when watch resets
const resetTimer = () => {
    stopTimer();
    [hr, min, sec] = [0, 0, 0];
    displayTime.innerHTML = `00 : 00 : 00`;
};