//your JS code here. If required.
let timer =document.getElementById("timer");
let currentdate = new Date();

setInterval(()=>{
	currentdate = new Date();

	timer.innerHTML = currentdate.toLocaleString();
},1000)