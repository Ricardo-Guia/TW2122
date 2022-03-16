<<<<<<< HEAD
//const oneSec = 1000;
//let counter = 0;
//window.alert("Olá meu puto")
//var interval = setInterval(function(){
//    alert("working");
//    counter++;
//}, oneSec*1);
//setTimeout(function(){
//    clearInterval(interval);
//}, oneSec*5);

function selectFood () {
    let foods = document.getElementsByClassName("food-item");
    let arrayFoods = Array.from(foods);
    console.log(arrayFoods)
    
    arrayFoods.forEach((food)=> {
        if(food.classList.contains(type)){
            food.style.display = "grid";
        }else{
            food.style.display = "none";
        }
    })
}

function selectDrinks () {
    let Drinks = document.getElementsByClassName("drink-item");
    let arrayFoods = Array.from(Drinks);
    console.log(arrayDrinks)
    
    arrayDrinks.forEach((drink)=> {
        if(drink.classList.contains(type)){
            drink.style.display = "visible";
        }else{
            drink.style.display = "none";
        }
    })
}
=======
const buttons = document.
getElementsByClassName('menu-btn');

const itens = document.
getElementsByClassName('food-item');

let clickedButton = 'featured';
selectItens(clickedButton);

for( let button of buttons ) {
    button.addEventListener(
        'click',
        () => {
            selectItens(button.id);
        }
    )
}

function selectItens( id ) {
    clickedButton = id;

    // removo todas as classes active dos butões
    for( let button of buttons ) {
        button.className = 'menu-btn';
    }

    // pelo id recebido, pego no buttao carregado
    // aplico a class de butao activo
    let button = document.getElementById(id);
    button.className = 'menu-btn active-btn';

    for( let item of itens ) {
        // o item é um element HTML.
        if(item.className === 'food-item '+ clickedButton)
        {
            // mostrar os itens com a class drinks
            item.style.display = 'grid';
        } else {
            item.style.display = 'none';
        }
    }
}
>>>>>>> upstream/main
