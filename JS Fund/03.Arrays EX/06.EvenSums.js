function evenSums(array)
{
    let counter = 0;
    for(let i = 0;i < array.length;i++)
    {
        let sumLeft = 0;
        let sumRight = 0;
        if(i > 0)
        {
            for(let left = i-1 ;left >= 0;left--)
            {
                sumLeft += array[left];
            }
        }
        if(i < array.length - 1)
        {
            for(let right = i+1 ;right < array.length;right++)
            {
                sumRight += array[right];
            }
        }
        if(sumLeft == sumRight)
        {
            console.log(i);
            counter++;
        }
    }
    if(counter == 0)
    {
        console.log('no');
    }
}