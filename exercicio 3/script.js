const table = document.getElementById("tableKey");
let tbody = table.children[0];

function generateKey() {
    console.log("Chave gerada com sucesso");

    const key = {
        numbers: generateXNumbersBetweenMinAndMax(5, 1, 50),
        stars: generateXNumbersBetweenMinAndMax(2, 1, 12)
    }

    key.numbers = sortArray(key.numbers);
    key.stars = sortArray(key.stars);

    addKeyToHtmlTable(key);
}

function generateXNumbersBetweenMinAndMax(length, minNumber, maxNumber) {
    let numbers = [];

    while (numbers.length < length) {
        let randomNumber = Math.random() * (maxNumber - minNumber + 1) + minNumber;
        numbers.push(Math.floor(randomNumber));
    }
    console.log(numbers);
    return numbers;
}

function addKeyToHtmlTable(key) {
    tbody.innerHTML = tbody.innerHTML
        + '<tr>'
            + '<td>' + key.numbers.join(' ') + '**' + key.stars.join(' ') + '</td>'
            + '<td>' + key.numbers.join(' ') + '</td>'
            + '<td>' + key.stars.join(' ') + '</td>'
        + '</tr>';

    console.log(tbody);
}

function sortArray(array) {
    return array.sort((a, b) => a - b)
}

function cleanTable() {
    tbody.innerHTML = '';
    console.log("Tabela limpa!")
}