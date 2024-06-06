const fan = document.getElementById("fan");

function Onfun() {fan.style.animationDuration = 4+ "s";}
function Offfun() {fan.style.animationDuration = 0+ "s";}
function fun1() {fan.style.animationDuration = 4+ "s";}
function fun2() {fan.style.animationDuration = 2+ "s";}
function fun3() {fan.style.animationDuration = 0.5+ "s";}
setTimeout( ()=>{
   Offfun()
},15000);