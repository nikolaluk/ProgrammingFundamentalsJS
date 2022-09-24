function print(firstNum, lastNum)
{
    let sum = 0;
    let output = '';
    for(let i = firstNum; i <= lastNum; i++)
    { 
        sum += i;
        output += `${i} `; 
    }
    console.log(output);
    console.log(`Sum: ${sum}`);
}