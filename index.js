var myDate = new Date();
let day = myDate.getDay()
let ndate = myDate.toLocaleString();
var days = ['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', ];
let dayss = days[day];
const hours = myDate.getUTCHours();
const minutes = myDate.getUTCMinutes();
const seconds = myDate.getUTCSeconds();
const milliseconds = myDate.getUTCMilliseconds();
const time = (`${hours}: ${minutes}: ${seconds}. ${milliseconds}`)
console.log(time)
document.getElementById('utcTime').innerHTML = time;
document.getElementById('dayOfWeek').innerHTML= dayss;