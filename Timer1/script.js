const startingminutes = 10;
let time = startingminutes *60;
const countdownEl = document.getElementById('timer');
 setInterval(CountTimer,1000);
function CountTimer(){
    const minutes = Math.floor(time/60);
    let seconds = time % 60;
    seconds = seconds<10 ? '0' + seconds : seconds;
    countdownEl.innerHTML = `${minutes}:${seconds}`;
    time--;

}