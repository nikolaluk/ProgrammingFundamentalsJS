function negativeOrPositive(firstArray)
{
    let secondArray = [];
    for(let i = 0; i < firstArray.length;i++)
    {
        if(firstArray[i] >= 0)
        {
            secondArray.push(firstArray[i]);
        }
        else
        {
            secondArray.unshift(firstArray[i]);
        }
    }
    for(let i = 0; i < secondArray.length;i++)
    {
        console.log(secondArray[i]);
    }
}