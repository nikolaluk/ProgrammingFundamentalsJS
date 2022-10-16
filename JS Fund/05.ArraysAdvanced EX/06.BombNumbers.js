function bombNumber(array, bombNumberArray)
{
    let explodingNumber = bombNumberArray[0];
    let explosionRadius = bombNumberArray[1];

    let finalArray = [];

    let sum = 0;

    for(let i = 0; i<array.length; i++)
    {
        if(array[i] == explodingNumber)
        {
            for(let j = i - explosionRadius; j <= i+explosionRadius; j++)
            {
                array[j] = 'exp';
            }
        }
    }
    finalArray = array.filter(el => el !== 'exp');
    
    for(let i = 0; i < finalArray.length; i++)
    {
        sum += finalArray[i];
    }
    console.log(sum);
}

bombNumber([1, 2, 2, 4, 2, 2,2, 9],
    
    [4, 2])