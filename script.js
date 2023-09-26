function clock(){
setTimeout(clock , 1000)
const d = new Date();
var date = d.getDate();
var month = d.getMonth();
var year = d.getFullYear();
var her = d.getHours();
var mie = d.getMinutes();
var sec = d.getSeconds();
var day = d.getDay();
console.log(day)

month = month < 10 ? "0" + (month+1) : (month+1);
date = date < 10 ? "0" + date : date;
mie = mie < 10 ? "0" + mie : mie;
sec = sec < 10 ? "0" + sec : sec;
her = her < 10 ? "0" + her : her;

 // AM PM 

if(her >= 12){
    Math.abs(her = her - 12)
    document.getElementById("ampm").innerHTML = "PM"
   
}else{
    document.getElementById("ampm").innerHTML = "AM"
}
// DATE
    dateElement = document.getElementById("date").innerHTML = date;
    dateElement = document.getElementById("month").innerHTML = month;
    dateElement = document.getElementById("year").innerHTML = year;

// TIME
    dateElement = document.getElementById("hour").innerHTML = her;
    dateElement = document.getElementById("minuts").innerHTML = mie;
    document.getElementById("second").innerHTML = sec;
    

//    WEEK

    switch (day){
        case 0:
            document.getElementById("sun").style.opacity = 1;
            break;
        case 1:
            document.getElementById("mon").style.opacity = 1;
            break;
        case 2:
            document.getElementById("tue").style.opacity = 1;
            break;
        case 3:
            document.getElementById("wed").style.opacity = 1;
            break;
        case 4:
            document.getElementById("thu").style.opacity = 1;
             break;
        case 5:
            document.getElementById("fri").style.opacity = 1;
            break;
        case 6:
            document.getElementById("sat").style.opacity = 1;
            break;
        default:
            confirm.log("wrong")
    }   
}
function blue_color() {
    //  Day
    var elements = document.getElementsByClassName("pointer");
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.backgroundColor = "blue";
    }
// Date
    document.getElementById("date").style.color = "blue";
    document.getElementById("month").style.color = "blue";
    document.getElementById("year").style.color = "blue";
// time
    document.getElementById("hour").style.color = "blue";
    document.getElementById("minuts").style.color = "blue";
    document.getElementById("second").style.color = "blue";
    document.getElementById("ampm").style.color = "blue";
    var blinker = document.getElementsByClassName("dlinker2");
    for (var i = 0; i < elements.length; i++) {
        blinker[i].style.backgroundColor = "blue";
    }
}

function red_color() {
    //  Day
    var elements = document.getElementsByClassName("pointer");
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.backgroundColor = "red";
    }
// Date
    document.getElementById("date").style.color = "red";
    document.getElementById("month").style.color = "red";
    document.getElementById("year").style.color = "red";
// time
    document.getElementById("hour").style.color = "red";
    document.getElementById("minuts").style.color = "red";
    document.getElementById("second").style.color = "red";
    document.getElementById("ampm").style.color = "red";
    var blinker = document.getElementsByClassName("dlinker2");
    for (var i = 0; i < elements.length; i++) {
        blinker[i].style.backgroundColor = "red";
    }
}

function perpal_color() {
    //  Day
    var elements = document.getElementsByClassName("pointer");
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.backgroundColor = "rgb(97, 3, 221)";
    }
// Date
    document.getElementById("date").style.color = "rgb(97, 3, 221)";
    document.getElementById("month").style.color = "rgb(97, 3, 221)";
    document.getElementById("year").style.color = "rgb(97, 3, 221)";
// time
    document.getElementById("hour").style.color = "rgb(97, 3, 221)";
    document.getElementById("minuts").style.color = "rgb(97, 3, 221)";
    document.getElementById("second").style.color = "rgb(97, 3, 221)";
    document.getElementById("ampm").style.color = "rgb(97, 3, 221)";
    var blinker = document.getElementsByClassName("dlinker2");
    for (var i = 0; i < elements.length; i++) {
        blinker[i].style.backgroundColor = "rgb(97, 3, 221)";
    }
}
function pink_color() {
    //  Day
    var elements = document.getElementsByClassName("pointer");
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.backgroundColor = "rgb(192, 42, 180)";
    }
// Date
    document.getElementById("date").style.color = "rgb(192, 42, 180)";
    document.getElementById("month").style.color = "rgb(192, 42, 180)";
    document.getElementById("year").style.color = "rgb(192, 42, 180)";
// time
    document.getElementById("hour").style.color = "rgb(192, 42, 180)";
    document.getElementById("minuts").style.color = "rgb(192, 42, 180)";
    document.getElementById("second").style.color = "rgb(192, 42, 180)";
    document.getElementById("ampm").style.color = "rgb(192, 42, 180)";
    var blinker = document.getElementsByClassName("dlinker2");
    for (var i = 0; i < elements.length; i++) {
        blinker[i].style.backgroundColor = "rgb(192, 42, 180)";
    }
}

function skyblue_color() {
    //  Day
    var elements = document.getElementsByClassName("pointer");
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.backgroundColor = "rgb(0, 255, 200)";
    }
// Date
    document.getElementById("date").style.color = "rgb(0, 255, 200)";
    document.getElementById("month").style.color = "rgb(0, 255, 200)";
    document.getElementById("year").style.color = "rgb(0, 255, 200)";
// time
    document.getElementById("hour").style.color = "rgb(0, 255, 200)";
    document.getElementById("minuts").style.color = "rgb(0, 255, 200)";
    document.getElementById("second").style.color = "rgb(0, 255, 200)";
    document.getElementById("ampm").style.color = "rgb(0, 255, 200)";
    var blinker = document.getElementsByClassName("dlinker2");
    for (var i = 0; i < elements.length; i++) {
        blinker[i].style.backgroundColor = "rgb(0, 255, 200)";
    }
}


function green_color() {
    //  Day
    var elements = document.getElementsByClassName("pointer");
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.backgroundColor = "rgb(9, 255, 0)";
    }
// Date
    document.getElementById("date").style.color = "rgb(9, 255, 0)";
    document.getElementById("month").style.color = "rgb(9, 255, 0)";
    document.getElementById("year").style.color = "rgb(9, 255, 0)";
// time
    document.getElementById("hour").style.color = "rgb(9, 255, 0)";
    document.getElementById("minuts").style.color = "rgb(9, 255, 0)";
    document.getElementById("second").style.color = "rgb(9, 255, 0)";
    document.getElementById("ampm").style.color = "rgb(9, 255, 0)";
    var blinker = document.getElementsByClassName("dlinker2");
    for (var i = 0; i < elements.length; i++) {
        blinker[i].style.backgroundColor = "rgb(9, 255, 0)";
    }
}

function yello_color() {
    //  Day
    var elements = document.getElementsByClassName("pointer");
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.backgroundColor = "rgb(255, 251, 0)";
    }
// Date
    document.getElementById("date").style.color = "rgb(255, 251, 0)";
    document.getElementById("month").style.color = "rgb(255, 251, 0)";
    document.getElementById("year").style.color = "rgb(255, 251, 0)";
// time
    document.getElementById("hour").style.color = "rgb(255, 251, 0)";
    document.getElementById("minuts").style.color = "rgb(255, 251, 0)";
    document.getElementById("second").style.color = "rgb(255, 251, 0)";
    document.getElementById("ampm").style.color = "rgb(255, 251, 0)";
    var blinker = document.getElementsByClassName("dlinker2");
    for (var i = 0; i < elements.length; i++) {
        blinker[i].style.backgroundColor = "rgb(255, 251, 0)";
    }
}






//  Dark mode

function darkmode() {
    var bodyElement = document.getElementById("bodyElement");
    var button = document.getElementById("button");
    var slider = document.getElementById("slider");
    var colors = document.getElementById("colors");
    var lable = document.getElementById("lable");
    var lablesub = document.getElementById("lablesub");
    var  container = document.getElementById("container");
    var  day_info = document.getElementById("day_info");
    var  month_info = document.getElementById("month_info");
    var  year_info = document.getElementById("year_info");
    var  hour_info = document.getElementById("hour_info");
    var  minuts_info = document.getElementById("minuts_info");
    var  second_info = document.getElementById("second_info");
    var  date2 = document.getElementById("date2");
    var  time2 = document.getElementById("time2");
    var  week2 = document.getElementById("week2");
    var week_name = document.getElementsByClassName("name");
    var Meridiem = document.getElementById("Meridiem");
    var Theme = document.getElementById("Theme");
    var colorinfo = document.getElementById("colorinfo");
    var theam_borer = document.getElementById("theam_borer");

    if (slider.classList.contains("dark")) {
        button.style.border = "2px solid black"
        slider.classList.remove("dark");
        slider.style.float = "right";
        slider.style.backgroundColor = "black"
        bodyElement.style.backgroundColor = "white";
        colors.style.backgroundColor = "white";
        lable.style.color = "black";
        lablesub.style.color = "black";
        container.style.border = "5px solid black"
        day_info.style.color = "black";
        month_info.style.color = "black";
        year_info.style.color = "black";
        hour_info.style.color = "black";
        minuts_info.style.color = "black";
        second_info.style.color = "black";
        date2.style.border = "2px solid black"
        time2.style.border = "2px solid black"
        week2.style.border = "2px solid black"
        theam_borer.style.border = "2px solid black"
        week_name[0].style.color = "black";
        week_name[1].style.color = "black";
        week_name[2].style.color = "black";
        week_name[3].style.color = "black";
        week_name[4].style.color = "black";
        week_name[5].style.color = "black";
        week_name[6].style.color = "black";
        colorinfo.style.color = "black";
        Meridiem.style.color = "black";
        Theme.style.color = "black";
    } else {
        button.style.border = "2px solid white"
        slider.classList.add("dark");
        slider.style.float = "left"
        slider.style.backgroundColor = "white";
        bodyElement.style.backgroundColor = "black";
        colors.style.backgroundColor = "black";
        lable.style.color = "white";
        lablesub.style.color = "white";
        container.style.border = "5px solid white"
        day_info.style.color = "white";
        month_info.style.color = "white";
        year_info.style.color = "white";
        hour_info.style.color = "white";
        minuts_info.style.color = "white";
        second_info.style.color = "white";
        date2.style.border = "2px solid white"
        time2.style.border = "2px solid white"
        week2.style.border = "2px solid white"
        week_name[0].style.color = "white";
        week_name[2].style.color = "white";
        week_name[3].style.color = "white";
        week_name[4].style.color = "white";
        week_name[5].style.color = "white";
        week_name[6].style.color = "white";
        week_name[1].style.color = "white";
        colorinfo.style.color = "white";
        Meridiem.style.color = "white";
        Theme.style.color = "white";
        theam_borer.style.border = "2px solid white"
    }
}



window.onload = clock;





