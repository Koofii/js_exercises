balans = {
    money: 500,
}

document.getElementById("balance").innerHTML = balans.money;


let balance = document.getElementById("balance");



let insert = document.getElementById("insert");
let withdraw = document.getElementById("withdraw");


insert.addEventListener("click", event => {
    let money = document.getElementById("money").value;
    let pengar = parseInt(money);
    console.log(pengar);
    document.getElementById("balance").innerHTML = pengar + balans.money;

})

withdraw.addEventListener("click", event => {
    let money = document.getElementById("money").value;
    let pengar = parseInt(money);
    console.log(pengar);
    document.getElementById("balance").innerHTML = balans.money - pengar;
})