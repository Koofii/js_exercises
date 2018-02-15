let supersoup = {
    potato: 3,
    onion: 1,
    corn: 1
}

let ica = {
    potato: 22,
    onion: 7,
    cucumber: 3,
    corn: 3
}
let coop = {
    potato: 12,
    onion: 5,
    cucumber: 2,
    corn: 5
}
let icapris = costOfReciepe(ica, supersoup);

let cooppris = costOfReciepe(coop, supersoup);

function costOfReciepe(ing, store){
    let x = store.potato * ing.potato;
    let z = store.corn * ing.corn;
    let y = store.onion * ing.onion;
    console.log(x+z+y);
    return x + z + y;
    
}


if (icapris > cooppris){
    console.log("Ica är dyrare");
} else {
    console.log("Coop är dyrare");
}
