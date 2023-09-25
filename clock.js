const date1=document.getElementById("date1")
const hour=document.getElementById("hours")
const min=document.getElementById("min")
const sec=document.getElementById("sec")

setInterval(myTimer, 1000);

function myTimer() {
const date=new Date();
date1.innerHTML=date.toLocaleDateString();

let hr=date.getHours();
hour.innerHTML=hr;

let mn=date.getMinutes();
min.innerHTML=mn;

let sc=date.getSeconds();
sec.innerHTML=sc;

}


date.toLocaleTimeString();
