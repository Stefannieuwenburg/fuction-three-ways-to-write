//3way to writa a function


function sayHallo1(){
    Console.log("Hallo1");
};

const sayHallo2 = function(){
    console.log("Hallo2");
};

const sayHallo3 = () =>{
    console.log("Hallo3");
};
//function declaration
function SquareSom(number1, number2) {
    const number1Squared = number1 * number1;
    const number2Squared = number2 * number2;
    const sum = number1Squared + number2Squared;
    const sumSquared = sum * sum;
    return sumSquared;
}
//fuction expression
const SquareSom = function(number1, number2) {
    const number1Squared = number1 * number1;
    const number2Squared = number2 * number2;
    const sum = number1Squared + number2Squared;
    const sumSquared = sum * sum;
    return sumSquared;
};
//Arrow function
const SquareSom = (number1, number2) => {
    const number1Squared = number1 * number1;
    const number2Squared = number2 * number2;
    const sum = number1Squared + number2Squared;
    const sumSquared = sum * sum;
    return sumSquared;
};

