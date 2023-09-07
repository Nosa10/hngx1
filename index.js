var times = document.getElementById('utcTime');
var daye = document.getElementById('dayOfWeek');
//console.log(time)
function currentTime() {
    var myDate = new Date();
    let day = myDate.getDay()
    let ndate = myDate.toLocaleString();
    var days = ['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', ];
    let dayss = days[day];
    const hours = myDate.getUTCHours();
    const minutes = myDate.getUTCMinutes();
    const seconds = myDate.getUTCSeconds();
    const milliseconds = myDate.getUTCMilliseconds();
    const time = (` ${milliseconds}`) 
    times.innerHTML = 'Current UTC Time in millisecond : '+ time;
    daye.innerHTML = 'Current day of the week : ' +dayss;
}
setInterval(currentTime, 1000)
// a.innerHTML = time;
// b.innerHTML= dayss;