let firstNumber, secondNumber = '';
let numberArray = []; //array used to store the input numbers 
let operator = '';

let textElement = document.querySelector('.js-text');

function sumArray(array){ //returns the sum of an array
    let total = 0;
    for(let i = 0; i < array.length; i++){
        total += array[i];
    }
    return total - 0;
}

function calculateResult(){ //called when the equals button is pressed
    secondNumber = sumArray(numberArray);
    let result;
    console.log(secondNumber);

    if(operator === 'addition'){ //calculates the result based on the operator
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

function roundDown(num){ //rounds down the ressult to 8 decimal places
    const decimalPlaces = 8;
    const multiplier = 10 ** decimalPlaces;
    const roundedNumber = Math.floor(num * multiplier) / multiplier;
    return parseFloat(roundedNumber.toFixed(decimalPlaces));
}

function addition(){
    operator = 'addition';
    firstNumber = sumArray(numberArray);
    console.log(firstNumber);
    numberArray.splice(0, numberArray.length);
}

function subtraction(){
    operator = 'subtraction';
    firstNumber = sumArray(numberArray);
    textElement.innerHTML = firstNumber;
    console.log(firstNumber);
    numberArray.splice(0, numberArray.length);
}

function multiplication(){
    operator = 'multiplication';
    firstNumber = sumArray(numberArray);
    textElement.innerHTML = firstNumber;
    console.log(firstNumber);
    numberArray.splice(0, numberArray.length);
}

function division(){
    operator = 'division';
    firstNumber = sumArray(numberArray);
    textElement.innerHTML = firstNumber;
    console.log(firstNumber);
    numberArray.splice(0, numberArray.length);
}








