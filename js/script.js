var pageOne=document.getElementById('pageOne');
var pageTwo=document.getElementById('pagetwo');
var akangenerator=document.getElementById('akangenerator');
var pageOne=document.getElementById('pageOne');
var pageTwo=document.getElementById('pagetwo');
var pageThree=document.getElementById('pageThree');
var fullPageTwo=document.getElementById('fullPageTwo');

akangenerator.addEventListener('click',AkanEvent);
pageTwo.addEventListener('submit',formEvent);

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