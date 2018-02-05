let color = {
    1: "red",
    2: "green",
    3: "pink",
};

let button = document.getElementById("knapp");

button.addEventListener("click", event => {
    var fieldOne = document.getElementById("one").value;
    var fieldTwo = document.getElementById("two").value;

    console.log(fieldOne);
    console.log(fieldTwo);

    var pr1 = parseInt(fieldOne);
    var pr2 = parseInt(fieldTwo);

    document.getElementById("colors").innerHTML = color[pr1] + " " + color[pr2];
    
})






// document.getElementById("colors").innerHTML = fieldOne + fieldTwo;