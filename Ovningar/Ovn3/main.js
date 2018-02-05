function addValue(val){
    
    let numberOne = parseInt(val);
    nr.push(numberOne);
    changeStyle(val)
}

function changeStyle(id){
    document.getElementById(id).style.backgroundColor = "green"
}

function what(arg){
    console.log(nr);
    if (nr.length < 2){
        return alert("Du måste skriva in två tal först innan du klicka på vad du vill göra.");
    }

    var cyka = document.getElementById("result")
    switch(arg){
        case "add":
            cyka.innerHTML = (nr[0] + nr[1])
            changeStyle("add")
            break;

        case "sub":
            cyka.innerHTML = (nr[0] - nr[1])
            changeStyle("sub")
            break;
        
        case "mull":
            cyka.innerHTML = (nr[0] * nr[1])
            changeStyle("multiply")
            break;

        case "divi":
            cyka.innerHTML = (nr[0] / nr[1])
            changeStyle("divi")
            break;

        default:
            cyka.innerHTML = ("")
            break;
    }
}

var nr = []
