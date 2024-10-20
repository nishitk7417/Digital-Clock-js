const hour = document.getElementsByClassName("hour")[0];
const minute = document.getElementsByClassName("minute")[0];
let second = document.getElementsByClassName("second")[0];
let day = document.getElementsByClassName("day")[0];
let month = document.getElementsByClassName("month")[0];
let date = document.getElementsByClassName("date")[0];

function updateClock(){
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let d = new Date().getDay();
    let mo = new Date().getMonth();
    let dat = new Date().getDate();
    let ampm = document.getElementById("ampm");
    if(h>12){
        h=h-12;
        ampm.innerHTML = "PM";
    }else{
        ampm.innerHTML = "AM";
    }
    h=h<10?"0"+h: h;
    m=m<10?"0"+m: m;
    s=s<10?"0"+s: s;

    // Array for days and Month
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let dayName = daysOfWeek[d];
    const monthsOfYear = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    const monthName = monthsOfYear[mo];
    
    // assigning values 
    hour.innerHTML = h;
    minute.innerHTML = m;
    second.innerHTML = s;
    day.innerHTML = dayName;
    month.innerHTML = monthName;
    date.innerHTML = dat;

    setInterval(()=>{
        updateClock();
    }, 1000);
} 
updateClock();