let buttonClear = document.getElementById("clear");
let buttonGenerate = document.getElementById("generate");
let table = document.getElementById("table");


let key = {
    numbers: Array(5),
    stars: Array(2),
}

function generateKey(){
    key ={
        numbers: generateNumbers(1, 50, 5),
        stars: generateNumbers(1, 12, 2),
    }
    let row = document.createElement("tr");
    let keyCell = document.createElement("td");
    let numbersCell = document.createElement("td");
    let starsCell = document.createElement("td");

    let string = key.numbers[0];
    for(let i = 1; i < key.numbers.length; i++){
        string += "-" + key.numbers[i] ;
    }
    string += ` *` + key.stars[0];
    for(let i = 1; i < key.stars.length; i++){
        string += "-" + key.stars[i] ;
    }
    key.numbers.sort(function(a, b){return a - b});
    key.stars.sort(function(a, b){return a - b});

    let stringNum = key.numbers[0];
    for(let i = 1; i < key.numbers.length; i++){
        stringNum += "-" + key.numbers[i] ;
    }
    let stringStars =  key.stars[0];
    for(let i = 1; i < key.stars.length; i++){
        stringStars += "-" + key.stars[i] ;
    }

    table.appendChild(row);
    row.appendChild(keyCell);
    row.appendChild(numbersCell);
    row.appendChild(starsCell);

    keyCell.appendChild(document.createTextNode(string));
    numbersCell.appendChild(document.createTextNode(stringNum));
    starsCell.appendChild(document.createTextNode(stringStars));
}


function generateNumbers(min, max, countOfNumbers){
    let numbers = [];

    for(let i = 0; numbers.length < countOfNumbers; i++){
        numbers[i] = Math.floor(Math.random() * max) + min;
    }
    return numbers;
}

function clear(){
    let tableRows = table.getElementsByTagName('tr');
    let rowCount = tableRows.length;
    for (let i=rowCount-1; i>0; i--) {
        table.removeChild(tableRows[i]);
    }
}

buttonClear.addEventListener("click", () => clear());