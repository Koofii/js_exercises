var cards = document.querySelectorAll(".board div");

let colors = ["blue", "yellow", "red", "green", "green", "red", "yellow", "blue"];
let flipped = [];




for(let card of cards){

    card.addEventListener("click", handleClick)
}



let matching;
let matchingIdx

function handleClick(e){
    let idx = Array.from(this.parentNode.children).indexOf(this);
    this.style['background-color'] = colors[idx];

    if(this.style['background-color']){
        return;
    }

    this.style['background-color'] = colors[idx];

    else if(!matching){
        matching = this;
        matchingIdx = idx
    
    } else {
        if(colors[idx] === colors[matchingIdx]){
            matching = undefined;
            matchingIdx = undefined;
        }
        
    else
}