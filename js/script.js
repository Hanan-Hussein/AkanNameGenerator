var pageOne=document.getElementById('pageOne');
var pageTwo=document.getElementById('pagetwo');
var akangenerator=document.getElementById('akangenerator');
var pageOne=document.getElementById('pageOne');
var pageTwo=document.getElementById('pagetwo');
var pageThree=document.getElementById('pageThree');
var fullPageTwo=document.getElementById('fullPageTwo');
var back=document.getElementById('back');

akangenerator.addEventListener('click',AkanEvent);
pageTwo.addEventListener('submit',formEvent);
back.addEventListener('click',backEvent);

function formEvent(e){
    e.preventDefault();
    pageOne.style.display='none';
    pageTwo.style.display='none';
    pageThree.style.display='initial'
    
  
}
function AkanEvent(e){
  e.preventDefault();
 
  pageOne.style.display='none';
  pageTwo.style.display='initial';
  fullPageTwo.style.display='initial';

}
function backEvent (e){
  e.preventDefault();
  pageThree.style.display='none';
  pageTwo.style.display='initial';
  fullPageTwo.style.display='initial';
}