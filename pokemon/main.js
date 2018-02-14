
let output = document.getElementById("output");
let hbValue = setValue(healthBarValue); 
let reset = document.getElementById("reset");


reset.addEventListener("click", event => {
    hbValue = setValue(healthBarValue);
})

console.log(hbValue);

function setValue(id) {
    var s = document.getElementById(id);
    document.getElementById("healthBarValue").style.width = "100%";
    document.getElementById("healthBarValue").style.backgroundColor = "rgba(30, 255, 0, 0.5)";
    return s = 100
}  


let hitButton = document.getElementById("hit");
hitButton.addEventListener("click", event => { 
    hbValue = hit(hbValue);
    console.log(hbValue, "after click"); 
    if(hbValue <= 0){
        console.log("you're dead")
        document.getElementById("healthBarValue").style.width = "0px"
        output.innerHTML = "Target is dead!!!"
    }
})





function hit (currHp){
    let damage = Math.floor((Math.random()*30)+1);
    let x = currHp - damage
    if(hbValue < 40){
        document.getElementById("healthBarValue").style.backgroundColor = "red";
    }
    console.log(damage, "damage");
    document.getElementById("healthBarValue").style.width = x + "%";
    output.innerHTML = "You did " + damage + " damage. Your target has " + x + " hp left"
    return x;
}


