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