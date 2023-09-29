let firstNumber, secondNumber = '';
let numberArray = [];
let operator = '';

let textElement = document.querySelector('.js-text');

function sumArray(array){
    let total = 0;
    for(let i = 0; i < array.length; i++){
        total += array[i];
    }
    return total - 0;
}

function calculateResult(){
    secondNumber = sumArray(numberArray);
    let result;
    console.log(secondNumber);

    if(operator === 'addition'){
        result = firstNumber + secondNumber;
        textElement.innerHTML = roundDown(result);
    } else if(operator === 'multiplication'){
        result = firstNumber * secondNumber;
        textElement.innerHTML = roundDown(result);
    } else if(operator === 'subtraction'){
        result = firstNumber - secondNumber;
        textElement.innerHTML = roundDown(result);
    } else if(operator === 'division'){
        result = firstNumber / secondNumber;
        textElement.innerHTML = roundDown(result);
    }

    numberArray.splice(0, numberArray.length); //clears the array after the calculation, ready for the next
    console.log(numberArray);
}

function roundDown(num){
    const decimalPlaces = 8;
    const multiplier = 10 ** decimalPlaces;
    const roundedNumber = Math.floor(num * multiplier) / multiplier;
    return parseFloat(roundedNumber.toFixed(decimalPlaces));
}







