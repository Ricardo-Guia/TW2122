const buttonGenerateKey = document.getElementById("generateid");

buttonGenerateKey.addEventListener(
    "click",
    ()=>generatekey(1, 50, 5)
)


function  generatekey(){
    const key = {
        numeros:generateArrayNumbers(1,50,5),
        estrelas:generateArrayNumbers(1,12,2,)


    }


      addkeyToTable(key);
}


function   addkeyToTable (key){
    const tbody = document.getElementsByTagName('tbody');

    tbody[0].innerHTML +=
        '<tr>' +
        '<td>' +  key.numeros.join(', ')
               +' **'+ key.estrelas.join(', ')+
        '</td>'+
        '<td>'+sortArray(key.numeros).join(', ')+'</td>'+
        '<td>'+ sortArray(key.estrelas).join(', ')+ '</td>'+
        ' </tr>'

    function sortArray (array){
        return array.sort((a,b)=>a-b);

    }
}
function generateArrayNumbers(
    min,max,length){
    let generatenumbers = [];

    //gerar números de forma aleatória
    //ciclo em cada iteração adicionar 1 numero ao array (5x tenho no array os 5 numeros)

    while(generatenumbers.length < length)
    {
        let number =
            Math.random()* (max-min)+ min

        let numberInt =  Math.floor(number);


        if(generatenumbers.includes(numberInt)) {
            generatenumbers.push(numberInt);     //push = para trabalhar por baixo de arra


        }
    }

    console.log(generatenumbers);
    return generatenumbers;

    function cleantbody (){
        const tbody = {

        }
    }
}

