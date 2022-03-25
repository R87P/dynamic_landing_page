// dom elements
const time = document.getElementById('time');
    greeting = document.getElementById('greeting');
    identifier = document.getElementById('name');
    focus = document.getElementById('focus');


// options
const showAmPm = true;


// show time 
function showTime() {
    let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();

    // set am or pm
    const amPm = hour >=12 ? 'PM' : 'AM';

    // 12hr format
    hour = hour % 12 || 12;


    // output time
    time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(
        sec
        )} ${showAmPm ? amPm : ''}`;
        setTimeout(showTime, 1000);
}

// add zeros
function addZero(n) {
    return (parseInt(n, 10) < 10 ? '0' : ' ') + n;
}

// set background & greeting
function setBgGreeting() {
    let today = new Date(),
      hour = today.getHours();

      if (hour < 12) {
          document.body.style.backgroundImage = "url('/img/morning.jpg')";
          greeting.textContent = 'Good Morning, ';
      } else if (hour < 18) {
          document.body.style.backgroundImage = "url('/img/afternoon.jpg')";
          greeting.textContent = 'Good Afternoon Playa, ';
      } else {
          document.body.style.backgroundImage = "url('/img/nigh.jpg')";
          greeting.textContent = 'Its Night Night Homie';
          document.body.style.color = white;
      }
}

// get name 
function getName() {
    if (localStorage.getItem('name') === null) {
        identifier.textContent = '[Enter Name Chief]';
    } else {
        identifier.textContent = localStorage.getItem('name');
    }
}

function setName(e) {
    if (e.type === 'keypress') {
        if (e.which === 13 || e.keyCode == 13) {
            localStorage.setItem('name', e.target.innerText);
            identifier.blur();
        }
    } else {
        localStorage.setItem('name', e.target.innerHTML);
    }
}


function getFocus() {
    if (localStorage.getItem('focus') === null) {
        focus.textContent = '[What you trying to do]';
    } else {
        focus.textContent = localStorage.getItem('focus');
    }
}

function setFocus() {
    if (e.type === 'keypress') {
        if (e.which === 13 || e.keyCode == 13) {
            localStorage.setItem('focus', e.target.innerText);
            focus.blur();
          }
        } else {
            localStorage.setItem('focus', e.target.innerText);
        }
    }

identifier.addEventListener('keypress', setName);
identifier.addEventListener('blur', setName);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('focus', setFocus);

showTime();
setBgGreeting();
getName();
getFocus();