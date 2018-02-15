
let memoryBrick = Array.from(document.getElementsByClassName("memory-brick"));


function showColor(e){
    let id = e.target.id;
    let x = document.getElementById(id)
    let y = x.getAttribute('data-value');
    console.log(y);
    x.style.backgroundColor = y;

}

memoryBrick.forEach(x => x.addEventListener("click", showColor));


let play;

while(play > 0){
    play = 2;
    play--
    
}

