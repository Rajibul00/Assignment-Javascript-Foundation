let num1 = prompt('Please Enter first Number');
let num2 = prompt('Please Enter second Number');
let opr = prompt('Please Enter the operation you want to perform , choose from bracket {+,-,*,/}')

num1 = parseInt(num1)
num2 = parseInt(num2)
let result;

switch (opr) {
    case '+':
        result = num1 + num2;
        
    break;

    case '-':
        result = num1 - num2
       break;

       case '*':
        result = num1 * num2
       break;

       case '/':
        result = num1 / num2
       break;

       default:
        console.log( "Invalid operator" );

}