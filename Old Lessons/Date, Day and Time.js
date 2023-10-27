var dateTime = new Date();
var daysInAWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
var namesOfMonths = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
var day = dateTime.getDay();
var date = dateTime.getDate();
var month = dateTime.getMonth();
var year = dateTime.getFullYear();
var currentHrs = dateTime.getHours();
var mins = dateTime.getMinutes();
var AmPm = "";

if (currentHrs >= 12) {
    AmPm = "PM"
} else if (currentHrs < 12) (
    AmPm = "AM"
)

console.log(daysInAWeek[day] + " " + date + " " + namesOfMonths[month] +" "+ year + "-"+ currentHrs+":"+mins +" " + AmPm);

///// Future Date/ Current date

var currDate = new Date();
var customDate = new Date("October 5, 2024");
var currTime = currDate.getTime();
var customTime = customDate.getTime();
var totalTime = customTime - currTime;

var days = Math.floor(totalTime / (1000 * 60 * 60 * 24))/// millisecond * seconds * minutes * hours

console.log("Dates", {currDate, customDate, currTime, customTime});
console.log(days);

// Setting custom dates and stuff

var currDate = new Date();
currDate.setFullYear(0)
currDate.setDate(1)
currDate.setMonth(0)
currDate.setHours(0)
currDate.setMinutes(0)
currDate.setSeconds(0)
currDate.setMilliseconds(0)

console.log(currDate);
