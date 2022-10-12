function addAndSubtract(firstNumber,secondNumber,thirdNumber)
{
    function sum(firstNumber,secondNumber)
    {
        let sum = firstNumber + secondNumber;
        return sum;
    }

    function subtract(sum,thirdNumber)
    {
        let all = sum - thirdNumber;
        return all;
    }
    let finalSum =sum(firstNumber,secondNumber);
    let all = subtract(finalSum,thirdNumber);
    console.log(all);
}