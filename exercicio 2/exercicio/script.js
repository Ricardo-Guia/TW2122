selectCategory (
    document.getElementById('feature'),
    'featured');
function selectCategory(btnClicked, type){
    let foods = document.getElementsByClassName('food-item');
    let arrayButtons;
    console.log(foods);
    let arrayFoods = Array.from(foods);
    arrayFoods.forEach(food => {

        console.log(food);
    });

// expected output: "a"
// expected output: "b"
// expected output: "c"

}