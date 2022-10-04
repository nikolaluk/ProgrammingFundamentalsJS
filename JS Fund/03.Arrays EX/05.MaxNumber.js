function maxNumber(array)
{
    let resultArray = [];
    let counter = 0;
    for(let i = 0; i < array.length; i++)
    { 
        let isBigger = true;
        let currentNumber = array[i];
        for(let j = i + 1; j < array.length;j++)
        {
            if(array[j] >= currentNumber)
            {
                isBigger = false;
                break;
            }
            
        }
        if(isBigger == true)
        {
            resultArray[counter] = currentNumber;
            counter++;
        }
    }
    console.log(resultArray.join(' '));
}

maxNumber([1, 4, 3, 2])