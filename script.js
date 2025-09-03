const displayEle = document.getElementById("display")

const startBtnEle = document.getElementById("startBtn")

const stopBtnEle = document.getElementById("stopBtn")

const resetBtnEle = document.getElementById("resetBtn")


let timer = null

let startTime = 0

let elapsedTime = 0

let isRunning = false //boolean



function start(){
    if(!isRunning){
        startTime = Date.now() - elapsedTime ;
        timer = setInterval(update, 10); //update every 10 millisecs
        isRunning = true;
    }

}



function stop(){
    if(isRunning){
        clearInterval(timer)
        elapsedTime = Date.now() - startTime;
        isRunning = false;
    }
}



function reset(){
        clearInterval(timer);
        startTime = 0
        elapsedTime = 0
        isRunning = false;
        displayEle.textContent = `00:00:00:00`;
}



function update(){
    const currentTime = Date.now();

    elapsedTime = currentTime - startTime;

    let hours = Math.floor( elapsedTime / (1000*60*60));
    let minutes = Math.floor( elapsedTime / (1000*60) % 60);
    let seconds = Math.floor( elapsedTime / 1000 %60);
    let milliseconds = Math.floor(elapsedTime % 1000 / 10);


     hours = String(hours).padStart(2, "0");
     minutes = String(minutes).padStart(2, "0");
     seconds = String(seconds).padStart(2, "0");
     milliseconds = String(milliseconds).padStart(2, "0");

    displayEle.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`

}



startBtnEle.addEventListener("click" , start)

stopBtnEle.addEventListener("click" , stop)

resetBtnEle.addEventListener("click" , reset)
