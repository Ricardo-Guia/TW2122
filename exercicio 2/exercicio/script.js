function selectFood(type) {

    let foods = document.getElementsByClassName('food-item');
    let arrayFoods = Array.from(foods);
    console.log(arrayFoods);

    arrayFoods.forEach((food) => {
        if (food.classList.contains(type)) {
            food.style.display = 'grid'
        } else {
            food.style.display = 'none';
        }
    })
}

function selectDrinks() {

}