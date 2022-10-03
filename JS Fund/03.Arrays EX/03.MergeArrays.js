function mergeArrays(firstArray,secondArray)
{
    let thirdArray = [];
    for(let i = 0; i <= secondArray.length - 1; i++)
    {
        if(i % 2 == 0)
        {
            thirdArray[i] = Number(firstArray[i]) + Number(secondArray[i])
        }
        else
        {
            thirdArray[i] = firstArray[i] + secondArray[i];
        }
    }
    console.log(thirdArray.join(' - '));
}