function calculator(firstNumber, secondNumber, opperator)
{
    switch(opperator)
    {
        case 'multiply':
            console.log(firstNumber * secondNumber);
            break;
        case 'divide':
            console.log(firstNumber / secondNumber);
            break;
        case 'add':
            console.log(firstNumber + secondNumber);
            break;
        case 'subtract':
            console.log(firstNumber - secondNumber);
            break;
    }
}