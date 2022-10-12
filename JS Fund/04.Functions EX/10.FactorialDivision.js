function division(factorialNumber, divider)
{
    function factorialCalculation(factorialResult, i)
    {
    factorialResult = factorialResult * i;
    return factorialResult;
    }



    let factorialResult = 1;
    let i = factorialNumber;
    let finalResult;
        while(i >= 2)
        {
            factorialResult = factorialCalculation(factorialResult,i);
            i--;
        }
        finalResult = factorialResult/divider;
        console.log((finalResult.toFixed(2)));
}

division(7,2)