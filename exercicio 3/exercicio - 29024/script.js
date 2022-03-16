const generateKey = () => {
    const generateNumbers = (from, to, howMany) => {
        const arrayOfRandomNumbers = [];

        for(let i = 0; i < howMany; i++){
            arrayOfRandomNumbers.push(Math.floor(Math.random() * to) + from);
        }

        return arrayOfRandomNumbers;
    }

    const object = {
        numbers: generateNumbers(1, 50, 5),
        stars: generateNumbers(1, 12, 2)
    }

    const tr = document.createElement('tr');
    const key = document.createElement('td');
    const numbers = document.createElement('td');
    const stars = document.createElement('td');

    let keyString = "";
    let numbersString = "";
    let starsString = "";

    for(let i = 0; i < object.numbers.length; i++){
        if(i == object.numbers.length - 1){
            keyString += object.numbers[i] + " **"
        } else {
            keyString += object.numbers[i] + '-'
        }
    }

    for(let i = 0; i < object.stars.length; i++){
        if(i == object.stars.length - 1){
            keyString += object.stars[i]
        } else {
            keyString += object.stars[i] + '-'
        }
    }

    object.numbers.sort(function(a, b){return a - b});
    object.stars.sort(function(a, b){return a - b});

    for(let i = 0; i < object.numbers.length; i++){
        if(i == object.numbers.length - 1){
            numbersString += object.numbers[i]
        } else {
            numbersString += object.numbers[i] + '-'
        }
    }

    for(let i = 0; i < object.stars.length; i++){
        if(i == object.stars.length - 1){
            starsString += object.stars[i]
        } else {
            starsString += object.stars[i] + '-'
        }
    }

    console.log(keyString)

    let textNodeKey = document.createTextNode(keyString);
    let textNodeNumbers = document.createTextNode(numbersString);
    let textNodeStars = document.createTextNode(starsString);

    key.appendChild(textNodeKey);
    numbers.appendChild(textNodeNumbers);
    stars.appendChild(textNodeStars);

    tr.appendChild(key)
    tr.appendChild(numbers)
    tr.appendChild(stars)

    tableBody.appendChild(tr)
    console.log(tr)
}

const clearTable = () => {
    const tableContent = document.querySelectorAll('tbody tr')

    for(let i = 0; i < tableContent.length; i++){
        tableBody.removeChild(tableContent[i]);
    }
}

const generateButton = document.getElementById("generate")
const clearButton = document.getElementById("clear")
const tableBody = document.getElementById('tableBody')

generateButton.addEventListener('click', generateKey)
clearButton.addEventListener('click', clearTable)