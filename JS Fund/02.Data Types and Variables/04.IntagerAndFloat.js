function integerAndFloat(firstNumber,secondNumber,thirdNumber)
{
    let sum = firstNumber + secondNumber + thirdNumber;

    if(Number.isInteger(sum))
    {
        console.log(`${sum} - Integer`);
    }
    else
    {
        console.log(`${sum} - Float`);
    }
}