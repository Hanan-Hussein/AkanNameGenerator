var pageOne=document.getElementById('pageOne');
var pageTwo=document.getElementById('pagetwo');
var akangenerator=document.getElementById('akangenerator');
var pageOne=document.getElementById('pageOne');
var pageTwo=document.getElementById('pagetwo');

akangenerator.addEventListener('click',AkanEvent);



function AkanEvent(e){
  e.preventDefault();
 
  pageOne.style.display='none';
  pageTwo.style.display='initial'

}