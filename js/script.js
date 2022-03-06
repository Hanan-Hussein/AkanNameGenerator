var pageOne = document.getElementById('pageOne');
var pageTwo = document.getElementById('pagetwo');
var akangenerator = document.getElementById('akangenerator');
var pageOne = document.getElementById('pageOne');
var pageTwo = document.getElementById('pagetwo');
var pageThree = document.getElementById('pageThree');
var fullPageTwo = document.getElementById('fullPageTwo');
var back = document.getElementById('back');
var exit = document.getElementById('exit');
var dates = document.getElementById('dates');
var output = document.getElementById('output');

akangenerator.addEventListener('click', AkanEvent);
pageTwo.addEventListener('submit', formEvent);
back.addEventListener('click', backEvent);
exit.addEventListener('click', exitEvent);


function formEvent(e) {
  e.preventDefault();

  if (dates.value === "") {
    alert("Please input a birth date");
    return;
  } else if (gender() == "") {
    alert("Please input a gender");
    return;
  }
  var dayVal = day(dates.value)
  var akan = names(dayVal, gender()).toUpperCase();
  output.textContent = akan;
  pageOne.style.display = 'none';
  pageTwo.style.display = 'none';
  pageThree.style.display = 'initial'
  pageTwo.reset();


}
var gender = () => {
  return pageTwo.gender.value;
}
var day = (newDate) => {
  var day = new Date(newDate);
  day = day.getDay();
  return day;

}
var names = (day, genders) => {
  let maleNames = ['kwasi', 'kwadow', 'kwabena', 'kwaku', 'yaw', 'kofi', 'kwame'];
  let femaleNames = ['Akosua', 'Adwoa', 'Abenna', 'Akua', 'Yaa', 'Afua', 'Ama'];


  if (genders === 'male') {
    return maleNames[day];
  } else if (genders === 'female') {
    return femaleNames[day];
  }
}

function AkanEvent(e) {
  e.preventDefault();

  pageOne.style.display = 'none';
  pageTwo.style.display = 'initial';
  fullPageTwo.style.display = 'initial';

}

function backEvent(e) {
  e.preventDefault();
  pageThree.style.display = 'none';
  pageTwo.style.display = 'initial';
  fullPageTwo.style.display = 'initial';
}

function exitEvent(e) {
  e.preventDefault();
  pageThree.style.display = 'none';
  pageTwo.style.display = 'none';
  fullPageTwo.style.display = 'none';
  pageOne.style.display = 'initial';
}