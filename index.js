
// DATE
const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];

const date = new Date();
const day = days[date.getDay()];
const month =  months[date.getMonth()];
const fullDate = day + " " + date.getDate() + ", " + month;
document.getElementById("date").innerHTML = fullDate;


// TIME/CLOCK
function showTime() {
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    // var s = date.getSeconds();
    var session = "AM";
    if (h == 0) {
      h = 12;
    }
    if (h > 12) {
      h = h - 12;
      session = "PM";
    }
    // h = (h < 12) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    // s = (s < 10) ? "0" + s : s;
    // var time = h + ":" + m + ":" + s + " " + session;
    var time = h + ":" + m;
    document.getElementById("clock").innerText = time;
    // document.getElementById("clock").textContent = time;
    setTimeout(showTime, 1000);
};
showTime();

// SEARCH //
const q = document.getElementById('query');
const google = 'https://www.google.com/search?q=';

// change to im feeling lucky search
// const ifl = 'http://www.google.com/search?ie=UTF-8&oe=UTF-8&sourceid=navclient&gfns=1&q=';

function submitted(event) {
  event.preventDefault();
  const url = google + '+' + q.value;
  location.href = url;
}
document.getElementById('form').addEventListener('submit', submitted);

// COUNTDOWN

// call function when button is pressed
document.getElementById("countdown").addEventListener("click", countdown);

// variables:
let i = 0;

function countdown() {
  // Set date
  const currentDate = new Date();
  // future date to count down to:
  const countdownDate = new Date('June 1, 2024 00:00:00');
  
  // calulate difference and the different units (set to 1 decimal place)
  const countMS = countdownDate - currentDate
  const countS = Number((countMS/1000).toFixed(1));
  const countM = Number((countMS/60000).toFixed(1));
  const countH = Number((countMS/3600000).toFixed(1));
  const countD = Number((countMS/86400000).toFixed(1));

  // create array to hold the values
  const count = [(countS + ' sec'), (countM + ' min'), (countH + ' h'), (countD + ' days')]

  // show the value selected
  document.getElementById('countdown').innerHTML = count[i]

  // change the value each time button is pressed
  i += 1
  if (i > 3) {
    i = 0
  }
}
