let buttonFood = document.getElementById("featured");
let buttonDrink = document.getElementById("drinks");
let foodsElements = document.getElementsByClassName("featured");
let drinksElements = document.getElementsByClassName("drinks");

const fun = () => {
    buttonDrink.classList.remove("active-btn");
    buttonFood.classList.add("active-btn");
    for (let i = 0, len = foodsElements.length; i < len; i++) {
        foodsElements[i].style.display = "grid";
    }
    for (let i = 0, len = drinksElements.length; i < len; i++) {
        drinksElements[i].style.display = "none";
    }
}
fun();

buttonFood.addEventListener("click", fun)

buttonDrink.addEventListener("click", () => {
    buttonFood.classList.remove("active-btn");
    buttonDrink.classList.add("active-btn");
    for (let i = 0, len = foodsElements.length; i < len; i++) {
        foodsElements[i].style.display = "none";
    }
    for (let i = 0, len = drinksElements.length; i < len; i++) {
        drinksElements[i].style.display = "grid";
    }
})