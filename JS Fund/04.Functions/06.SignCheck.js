function check(firstNumber,secondNumber, thirdNumber)
{
    if(firstNumber > 0 && secondNumber > 0 && thirdNumber > 0)
    {
        console.log(`Positive`);
    }
    else if(firstNumber > 0 && secondNumber > 0 && thirdNumber < 0)
    {
        console.log(`Negative`);
    }
    else if(firstNumber > 0 && secondNumber < 0 && thirdNumber > 0)
    {
        console.log(`Negative`);
    }
    else if(firstNumber < 0 && secondNumber > 0 && thirdNumber > 0)
    {
        console.log(`Negative`);
    }
    else if(firstNumber < 0 && secondNumber < 0 && thirdNumber > 0)
    {
        console.log(`Positive`);
    }
    else if(firstNumber > 0 && secondNumber < 0 && thirdNumber < 0)
    {
        console.log(`Positive`);
    }
    else if(firstNumber < 0 && secondNumber > 0 && thirdNumber < 0)
    {
        console.log(`Positive`);
    }
    else if(firstNumber < 0 && secondNumber < 0 && thirdNumber < 0)
    {
        console.log(`Negative`);
    }
}