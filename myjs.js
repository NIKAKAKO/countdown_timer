let target  = new Date("October 11, 2022 11:13:00");
;



let days=document.getElementById('days');
let hours=document.getElementById('hours');
let minutes=document.getElementById('minutes');
let seconds=document.getElementById('seconds');
console.log(days);
setInterval (counter, 1000);
let daysconvert=1000*24*60*60;
let hoursconvert=daysconvert/24;
let minutesconvert=hoursconvert/60;
let secondsconvert=minutesconvert/60;


function counter () {
    let nowDate=new Date();
    let distance=target-nowDate;
    days.innerHTML=Math.floor(distance/daysconvert)>9? Math.floor(distance/daysconvert):"0"+ Math.floor(distance/daysconvert);
    hours.innerHTML=Math.floor(distance%daysconvert/hoursconvert)>9 ? Math.floor(distance%daysconvert/hoursconvert) : "0"+Math.floor(distance%daysconvert/hoursconvert);
    minutes.innerHTML=Math.floor(distance%daysconvert%hoursconvert/minutesconvert)>9 ? Math.floor(distance%daysconvert%hoursconvert/minutesconvert) : "0"+Math.floor(distance%daysconvert%hoursconvert/minutesconvert);
    seconds.innerHTML=Math.floor(distance%daysconvert%hoursconvert%minutesconvert/secondsconvert)>9 ? Math.floor(distance%daysconvert%hoursconvert%minutesconvert/secondsconvert):"0"+Math.floor(distance%daysconvert%hoursconvert%minutesconvert/secondsconvert);
}
