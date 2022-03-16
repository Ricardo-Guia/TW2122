function selectFood(){
    let food = document.getElementsByClassName("food-item");
    console.log(food);
    food.forEach(()=> console.log(food));

}

function selectDrinks(){
    console.log("bebida selecionada")
}




//window.setInterval(function,milliseconds); --
var interval = setInterval(function () {alert("working")}, 1000*1);


//window.setTimeout(function,milliseconds); --
setTimeout(function (){
    clearInterval(interval);
    }, 1000*1);


//window.clearTimeout(timeoutVariable);
const myTimeout = setTimeout(myTimer, 3000);

//window.clearInterval(timerVariable)
const myInterval = setInterval(myTimer, 1000);

function myTimer() {
    const date = new Date();
    document.getElementById("teste").innerHTML = date.toLocaleTimeString();
}

function myStopFunction() {
    clearInterval(myInterval);
}



//window.alert()
alert("Comida de Graça!!");


//window.confirm()
confirm("Clica aqui!");


//window.prompt()
let comida = prompt("O que estás a pensar comer?", "Pão");

if (comida != null) {
    document.getElementById("teste").innerHTML =
        "Vais comer " + comida + "?";
}



