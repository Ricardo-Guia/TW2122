const buttonGenerateKey = document.getElementById('generateKey')
var keys

buttonGenerateKey.addEventListener('click',()=>generateKey(1,50,5))

function generateKey(){
    const key = {
        numbers:generateArrayNumbers(1,50,4),
        estrelas:generateArrayNumbers(1,12,1)
    }
    addKeyToTable(key);
}

function addKeyToTable(key){
    const tbody = document.getElementsByTagName('tbody');
    tbody[0].innerHTML += '<tr>' +
        '<td>'+ key.numbers.join(', ') +'==>' + key.estrelas.join(', ') + '</td>' +
        '<td>'+ +'</td>' +
        '<td>'+ +'</td>'
}

function generateArrayNumbers(min, max, length){
    let generatedNumbers = [];

    while(generatedNumbers.length <= length){

        let number = Math.random() * (max * min) - min;

        generatedNumbers.push(Math.floor(number));
    }
    console.log(generatedNumbers)

    return  generatedNumbers;
}