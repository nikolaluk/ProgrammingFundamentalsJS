function reverse(n, numbers)
{
    let newArray = [];
    let reverseArray = [];
    let reverseArrayAsString = '';
    let j = 0;
    for(let i = 0; i < n; i++)
    {
        newArray[i] = numbers[i];
    }
    for(let i = newArray.length - 1; i >= 0; i--)
    {
        reverseArray[j] = newArray[i]
        j++;
    }
    for(let i = 0; i < n; i++)
    {
        reverseArrayAsString += reverseArray[i];
        if(i < reverseArray.length - 1)
        {
            reverseArrayAsString += " ";
        }
    }
    console.log(reverseArrayAsString);
}

reverse(3, [10, 20, 30, 40, 50])