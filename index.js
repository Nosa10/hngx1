var days = ['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', ];
var myDate = new Date();
let day = myDate.getDay()
let dayss = days[day];
var dayOfTheWeek = document.getElementById('dayOfWeek');
dayOfTheWeek.textContent = dayss;
function currentTime() {
    var time = document.getElementById('utcTime');
    const milliseconds = Date.now();
    time.textContent =  milliseconds;
    
}
setInterval(currentTime, 1000)