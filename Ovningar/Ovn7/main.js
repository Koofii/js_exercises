var date = new Date();
console.log(date);

var day = date.getDate();
var month = date.getMonth();
var year = date.getFullYear();

// document.write(year + "-" + Number(month + 1) + "-" + day);


var datum = new Date();

var timme = date.getHours();
var minut = date.getMinutes();
var sekund = date.getSeconds();


let minTid = setInterval(myTimer, 1000);

function myTimer(){
    var d = new Date();
    document.getElementById("mintid").innerHTML = d.toLocaleTimeString();
}