

function clock() {
    var fullDate = new Date();
    var hours = fullDate.getHours();
    var mins = fullDate.getMinutes();
    var secs = fullDate.getSeconds();

    if (hours > 12) {
        hours = hours - 12;
        document.getElementById("AmPm").innerHTML = "PM"
    }
    else {
        document.getElementById("AmPm").innerHTML = "AM"
    }

    if (hours < 10) {
        hours = "0" + hours;
    }
    if (mins < 10) {
        mins = "0" + mins;
    }



    document.getElementById("hour").innerHTML = hours;
    document.getElementById("minute").innerHTML = mins;

    if (secs%2 == 0) {
        document.getElementById("blink1").style.visibility = "hidden";
    }
    else {
        document.getElementById("blink1").style.visibility = "visible";
    }
}

setInterval(clock,100);