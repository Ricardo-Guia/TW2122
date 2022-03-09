const foodButton = document.getElementById("featured");
const drinksButton = document.getElementById("drinks");

const drinks = document.getElementsByClassName('drinks');
const food = document.getElementsByClassName('featured')

const showFood = () => {
    foodButton.classList.add('active-btn');
    drinksButton.classList.remove('active-btn');

    for (let i = 0; i < food.length; i++) {
        food[i].style.display = "grid";
    }

    for (let i = 0; i < drinks.length; i++) {
        drinks[i].style.display = "none";
    }
}

showFood();

foodButton.addEventListener('click', showFood)

drinksButton.addEventListener('click', () => {
    foodButton.classList.remove('active-btn');
    drinksButton.classList.add('active-btn');

    for (let i = 0; i < food.length; i++) {
        food[i].style.display = "none";
    }

    for (let i = 0; i < drinks.length; i++) {
        drinks[i].style.display = "grid";
    }
})