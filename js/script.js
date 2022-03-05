var pageOne=document.getElementById('pageOne');
var pageTwo=document.getElementById('pagetwo');
var akangenerator=document.getElementById('akangenerator');
var pageOne=document.getElementById('pageOne');
var pageTwo=document.getElementById('pagetwo');
var pageThree=document.getElementById('pageThree');
var fullPageTwo=document.getElementById('fullPageTwo');

akangenerator.addEventListener('click',AkanEvent);
pageTwo.addEventListener('submit',FormEvent);

formEvent=(e)=>{
  e.preventDefault();
 

  
}
function AkanEvent(e){
  e.preventDefault();
 
  pageOne.style.display='none';
  pageTwo.style.display='initial';
  fullPageTwo.style.display='initial';


}