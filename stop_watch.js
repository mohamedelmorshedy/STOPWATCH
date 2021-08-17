    var hours = 00;
    var minutes = 00;
    var seconds = 00; 
    var tens = 00;
    var i = 0;
    var day = ["saturday","sunday","monday","tuesday","Wednesday","thursday","friday"];
    var appendTens = document.getElementById("tens")
    var appendSeconds = document.getElementById("seconds")
    var appendminutes = document.getElementById("minutes");
    var appendhours = document.getElementById("hours");
    var appendday = document.getElementById("days");
    var buttonStart = document.getElementById('button-start');
    var buttonStop = document.getElementById('button-stop');
    var buttonReset = document.getElementById('button-reset');
    var Interval ;

function StartTimer() {
    tens++;
    if (tens < 9) {
        appendTens.innerHTML ="0" + tens;
    }
    if (tens > 9) {
        appendTens.innerHTML =  tens;

    }
    if (tens > 99) {
        seconds++
        appendSeconds.innerHTML ="0" + seconds;
        tens = 0;
        appendTens.innerHTML = 0;
    }
    if (seconds > 9) {
        appendSeconds.innerHTML = seconds;
    }
    if (seconds > 59) {
        minutes++;
        appendminutes.innerHTML = "0" + minutes;
        seconds = 0;
        appendSeconds.innerHTML = "0" + seconds;
    }
    if (minutes > 59) {
        hours++;
        appendhours.innerHTML = "0" + hours;
        minutes = 0;
        appendminutes.innerHTML = "0" + minutes;
    }
    if (hours > 23) {
        i++
        appendday.innerHTML = `" ${day[i]} "`;
        hours = 0;
        appendhours.innerHTML = "0" + hours;
    }
    
    
    }

        buttonStart.onclick = function () {
      Interval =setInterval(StartTimer)
}
      buttonStop.onclick = function() {
       clearInterval(Interval);
}
    buttonReset.onclick = function() {
    clearInterval(Interval);
    tens = "00";
  	seconds = "00";
    minutes = "00";
    hours="00"
    appendTens.innerHTML = tens;
    appendSeconds.innerHTML = seconds;
    appendminutes.innerHTML = minutes;
    appendhours.innerHTML = hours;
    appendday.innerHTML = `" ${day[0]} "`;


  }