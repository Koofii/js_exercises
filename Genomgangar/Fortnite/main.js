let knapp = document.getElementById("myButton");
let number = randomNr();
console.log(number);
function randomNr(){
    return Math.floor(Math.random()* 10)+1;
}

knapp.addEventListener("click", event => {

let yes = "YES GO PLAY FORTNITE"
let no = "FUCK NO YOU'LL LOSE ANYWAYS"

    if (number > 5){
        document.getElementById("yes-no").innerHTML = yes
    }
    else{
        document.getElementById("yes-no").innerHTML = no
    }
})
