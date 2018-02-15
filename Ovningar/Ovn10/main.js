
let number = randomNr();
console.log(number);
function randomNr(){
    return Math.floor(Math.random()* 10)+1;
}


let knapp = document.getElementById("myButton");

knapp.addEventListener("click", event => {
    let x = document.getElementById("guess").value;
    y = parseInt(x);
    console.log(y);
    

    if (y == number){
        alert("Number is very gut")
    }
    if (y > number){
        alert("Du gissade för högt")
    }
    if (y < number){
        alert("Du gissade för lågt")
    }
    
})