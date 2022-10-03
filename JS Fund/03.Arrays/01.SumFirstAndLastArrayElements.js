function sum(numbers)
{
    let firstNumber = numbers[0];
    let lastNumber = numbers[numbers.length - 1];

    let sum = firstNumber + lastNumber;
    console.log(sum);
}

sum([20, 30, 40]);