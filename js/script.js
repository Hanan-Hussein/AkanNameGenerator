var pageOne = document.getElementById('pageOne');
var pageTwo = document.getElementById('pagetwo');
var akangenerator = document.getElementById('akangenerator');
var pageOne = document.getElementById('pageOne');
var pageTwo = document.getElementById('pagetwo');
var pageThree = document.getElementById('pageThree');
var fullPageTwo = document.getElementById('fullPageTwo');
var back = document.getElementById('back');
var exit = document.getElementById('exit');
var dates = document.getElementById('dates')

akangenerator.addEventListener('click', AkanEvent);
pageTwo.addEventListener('submit', formEvent);
back.addEventListener('click', backEvent);
exit.addEventListener('click', exitEvent);


function formEvent(e) {
  e.preventDefault();

  if (dates.value === "") {
    alert("Please input a birth date");
    return;
  } else if (pageTwo.gender.value === "") {
    alert("Please input a gender");
    return;
  }

  pageOne.style.display = 'none';
  pageTwo.style.display = 'none';
  pageThree.style.display = 'initial'


}
var gender=()=>{
  return pageTwo.gender.value;
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